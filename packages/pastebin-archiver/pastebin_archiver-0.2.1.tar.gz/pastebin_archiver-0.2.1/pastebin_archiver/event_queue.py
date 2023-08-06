import collections
import logging
from dataclasses import dataclass
from typing import Any, Callable, Deque, Dict, Optional


@dataclass
class Event:
    """Class for holding a callable event which can be executed in the future"""

    function: Callable
    arguments: Dict[str, Any]

    logger = logging.getLogger(__name__)

    def run(self) -> Any:
        self.logger.debug(f"Running event {self.function} ({self.arguments})")
        return self.function(**self.arguments)


class EventQueue:
    """Class for queueing Events to be executed in order"""

    logger: logging.Logger = logging.getLogger(__name__)
    deque: Deque[Event] = collections.deque()

    @classmethod
    def enqueue(
        cls,
        function: Callable,
        arguments: Optional[dict] = None,
        priority: bool = False,
    ) -> None:
        """
        Add an event to the queue

        :param function: the function to call when the event is executed
        :param arguments: the arguments to pass to the function when the event is executed
        :param priority: insert the event at the front of the queue (instead of the back)
        """
        e = Event(function, arguments or {})
        cls.logger.debug(
            f"Queuing event {function} ({arguments}) with {'high' if priority else 'low'} priority"
        )
        if priority:
            cls.deque.appendleft(e)
        else:
            cls.deque.append(e)

    @classmethod
    def next(cls) -> Optional[Event]:
        """Remove the next event from the queue and return it"""
        if len(cls.deque) == 0:
            return None
        return cls.deque.popleft()

    @classmethod
    def reset(cls) -> None:
        """Re-initialize the queue (drops all queued events)"""
        cls.deque = collections.deque()
