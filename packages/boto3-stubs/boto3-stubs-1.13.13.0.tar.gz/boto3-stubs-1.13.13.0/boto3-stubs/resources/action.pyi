# pylint: disable=unused-argument,multiple-statements,super-init-not-called
import logging
from typing import List, Dict, Any, Union, Callable

from botocore.hooks import BaseEventHooks

from boto3.resources.model import Action, Waiter
from boto3.resources.factory import ResourceFactory
from boto3.resources.base import ServiceResource
from boto3.resources.collection import ResourceCollection

from boto3.utils import ServiceContext

logger: logging.Logger

class ServiceAction:
    def __init__(
        self,
        action_model: Action,
        factory: ResourceFactory = ...,
        service_context: ServiceContext = ...,
    ) -> None: ...
    def __call__(
        self, parent: ServiceResource, *args: Any, **kwargs: Any
    ) -> Union[ServiceResource, List[ServiceResource], Dict[str, Any]]: ...

class BatchAction(ServiceAction):
    def __call__(
        self, parent: ResourceCollection, *args: Any, **kwargs: Any
    ) -> List[Dict]: ...

class WaiterAction:
    def __init__(self, waiter_model: Waiter, waiter_resource_name: str) -> None: ...
    def __call__(self, parent: ServiceResource, *args: Any, **kwargs: Any) -> None: ...

class CustomModeledAction:
    def __init__(
        self,
        action_name: str,
        action_model: Dict[str, Any],
        function: Callable[..., Any],
        event_emitter: BaseEventHooks,
    ) -> None: ...
