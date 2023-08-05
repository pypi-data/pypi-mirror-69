import asyncio
import enum
from typing import (
    Any, Optional,
    Mapping,
    Sequence,
)

import attr

from ai.backend.common.types import (
    ContainerId,
    KernelId,
)


@attr.s(auto_attribs=True, slots=True)
class VolumeInfo:
    name: str             # volume name
    container_path: str   # in-container path as str
    mode: str             # 'rw', 'ro', 'rwm'


@attr.s(auto_attribs=True, slots=True)
class Port:
    host: str
    private_port: int
    host_port: int


class ContainerStatus(str, enum.Enum):
    RUNNING = 'running'
    RESTARTING = 'restarting'
    PAUSED = 'paused'
    EXITED = 'exited'
    DEAD = 'dead'
    REMOVING = 'removing'


@attr.s(auto_attribs=True, slots=True)
class Container:
    id: ContainerId
    status: ContainerStatus
    image: str
    labels: Mapping[str, str]
    ports: Sequence[Port]
    backend_obj: Any  # used to keep the backend-specific data


class LifecycleEvent(int, enum.Enum):
    DESTROY = 0
    CLEAN = 1
    START = 2


@attr.s(auto_attribs=True, slots=True)
class ContainerLifecycleEvent:
    kernel_id: KernelId
    container_id: Optional[ContainerId]
    event: LifecycleEvent
    reason: str
    done_event: Optional[asyncio.Event] = None
    exit_code: Optional[int] = None
