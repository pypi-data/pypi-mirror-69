import abc
from collections import UserDict
from typing import (
    Callable,
    Coroutine,
    Dict,
    List,
    Any,
    Union,
    Iterable,
    Type,
    Optional,
)

from aiohttp import web
from aiohttp.hdrs import METH_ALL
from aiohttp.web_routedef import RouteDef
from cached_property import cached_property
from pydantic import BaseModel, validator

from asyncworker.conf import settings
from asyncworker.connections import AMQPConnection
from asyncworker.http.wrapper import RequestWrapper
from asyncworker.options import DefaultValues, RouteTypes, Actions
from asyncworker.types.registry import TypesRegistry
from asyncworker.types.resolver import ArgResolver, MissingTypeAnnotationError

RouteHandler = Callable[..., Coroutine]


class Model(BaseModel, abc.ABC):
    """
    An abstract pydantic BaseModel that also behaves like a Mapping
    """

    def __getitem__(self, item):
        try:
            return getattr(self, item)
        except AttributeError as e:
            raise KeyError from e

    def __setitem__(self, key, value):
        try:
            return self.__setattr__(key, value)
        except (AttributeError, ValueError) as e:
            raise KeyError from e

    def __eq__(self, other):
        if isinstance(other, dict):
            return self.dict() == other
        return super(Model, self).__eq__(other)

    def __len__(self):
        return len(self.fields)

    def keys(self):
        return self.fields.keys()

    def get(self, key, default=None):
        try:
            return self[key]
        except KeyError:
            return default


class _RouteOptions(Model):
    pass


class Route(Model, abc.ABC):
    """
    An abstract Model that acts like a route factory
    """

    type: RouteTypes
    handler: Any
    routes: List[str]
    options: _RouteOptions = _RouteOptions()

    @staticmethod
    def factory(data: Dict) -> "Route":
        try:
            type_ = data.pop("type")
        except KeyError as e:
            raise ValueError("Routes must have a type") from e

        if type_ == RouteTypes.HTTP:
            return HTTPRoute(**data)
        if type_ == RouteTypes.AMQP_RABBITMQ:
            return AMQPRoute(**data)
        if type_ == RouteTypes.SSE:
            return SSERoute(**data)
        raise ValueError(f"'{type_}' is an invalid RouteType.")


class HTTPRoute(Route):
    type: RouteTypes = RouteTypes.HTTP
    methods: List[str]
    options: _RouteOptions = _RouteOptions()

    @classmethod
    def _validate_method(cls, method: str) -> str:
        method = method.upper()
        if method not in METH_ALL:
            raise ValueError(f"'{method}' isn't a valid supported HTTP method.")
        return method

    @validator("methods")
    def validate_method(cls, v: Union[str, List[str]]):
        # compatibility with older versions of pydantic
        if isinstance(v, str):  # pragma: no cover
            return cls._validate_method(v)

        return [cls._validate_method(method) for method in v]

    def aiohttp_routes(self) -> Iterable[RouteDef]:
        for route in self.routes:
            for method in self.methods:
                kwargs = {"allow_head": False} if method == "GET" else {}
                yield RouteDef(
                    method=method,
                    path=route,
                    handler=self.handler,
                    kwargs=kwargs,
                )


class _AMQPRouteOptions(_RouteOptions):
    bulk_size: int = DefaultValues.BULK_SIZE
    bulk_flush_interval: int = DefaultValues.BULK_FLUSH_INTERVAL
    on_success: Actions = DefaultValues.ON_SUCCESS
    on_exception: Actions = DefaultValues.ON_EXCEPTION
    connection_fail_callback: Optional[
        Callable[[Exception, int], Coroutine]
    ] = None
    connection: Optional[Union[AMQPConnection, str]]

    class Config:
        arbitrary_types_allowed = True


class AMQPRoute(Route):
    type: RouteTypes = RouteTypes.AMQP_RABBITMQ
    vhost: str = settings.AMQP_DEFAULT_VHOST
    options: _AMQPRouteOptions


class _SSERouteOptions(_RouteOptions):
    bulk_size: int = DefaultValues.BULK_SIZE
    bulk_flush_interval: int = DefaultValues.BULK_FLUSH_INTERVAL
    headers: Dict[str, str] = {}


class SSERoute(Route):
    type: RouteTypes = RouteTypes.SSE
    headers: Dict[str, str] = {}
    options: _SSERouteOptions = _SSERouteOptions()

    @validator("options", pre=True, whole=True, always=True)
    def add_default_headers(cls, v, values, **kwargs):
        headers = {
            **values.pop("headers", {}),
            **values.pop("default_options", {}).get("headers", {}),
        }
        v["headers"] = headers

        return v


async def call_http_handler(request: web.Request, handler: RouteHandler):
    """
    Quando o RequestWrapper estiver mais sólido, esse método deve receber `asyncworker.http.wrapper.RequestWrapper` e não `web.Request`.
    Primeiro vamos documentar que essa chamada será depreciada e função de chamada onde
    recebemos `RequestWrapper`.
    """
    arg_resolver = ArgResolver(registry=request["types_registry"])
    try:
        return await arg_resolver.wrap(handler)
    except MissingTypeAnnotationError:
        return await handler(request)


def http_handler_wrapper(handler):
    async def _insert_types_registry(request: web.Request):
        """
        Esse é o único ponto que tem contato direto com o aiohttp. É essa corotina que é efetivament registrada nas rotas do aiohttp. Daqui pra frente tudo é chamado através do ccall_http_handler() e pode receber `RequestWrapper` como parametro.
        """
        registry = TypesRegistry()
        request["types_registry"] = registry
        registry.set(request)

        r_wrapper = RequestWrapper(
            http_request=request, types_registry=registry
        )
        registry.set(r_wrapper)
        return await call_http_handler(request, handler)

    return _insert_types_registry


class RoutesRegistry(UserDict):
    def _get_routes_for_type(self, route_type: Type) -> Iterable:
        return tuple((r for r in self.values() if isinstance(r, route_type)))

    @cached_property
    def http_routes(self) -> Iterable[HTTPRoute]:
        return self._get_routes_for_type(HTTPRoute)

    @cached_property
    def amqp_routes(self) -> Iterable[AMQPRoute]:
        return self._get_routes_for_type(AMQPRoute)

    @cached_property
    def sse_routes(self) -> Iterable[SSERoute]:
        return self._get_routes_for_type(SSERoute)

    def __setitem__(self, key: RouteHandler, value: Union[Dict, Route]):

        if not isinstance(value, Route):
            route = Route.factory({"handler": key, **value})
        else:
            route = value

        if route.type == RouteTypes.HTTP:
            route.handler = http_handler_wrapper(key)

        super(RoutesRegistry, self).__setitem__(key, route)

    def add_route(self, route: Route) -> None:
        self[route.handler] = route

    def route_for(self, handler: RouteHandler) -> Route:
        return self[handler]
