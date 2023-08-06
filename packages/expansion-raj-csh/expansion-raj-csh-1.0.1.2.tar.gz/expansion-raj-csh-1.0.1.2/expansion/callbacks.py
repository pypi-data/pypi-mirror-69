"""This is the callbacks module of the expansion package.
    Contains Callback abstract base class and predefined
    callback classes for use in expansion.ColoredPointHandler.simulate()
    or expansion.ColoredPointHandler.run_callbacks.
"""

from __future__ import annotations

# pylint: disable=super-init-not-called, too-few-public-methods

__version__ = '1.0'
__author__ = 'Rajarshi Mandal'
__all__ = ['Callback',
           'Sample',
           'Print',
           'PygameGUI',
           'callback_from_function']

import abc
import sys
from typing import Any, Callable, Optional, Tuple, TYPE_CHECKING

import pygame as pg

if TYPE_CHECKING:
    from expansion import expansion


class Callback(metaclass=abc.ABCMeta):
    """Abstract Base Class for all callbacks to derive from. """
    @abc.abstractmethod
    def __call__(self, epoch: int, handler: expansion.ColoredPointHandler) -> None:
        """Calls callback.

            Args:
                epoch (int): Current epoch number.
                handler (expansion.ColoredPointHandler): ColoredPointHandler instance
                                                         on which the callback will operate on.
        """

class Sample(Callback):
    """Callback to save ColoredPointHandler.arr as an image file
        Names each image as the current epoch number.

        Args:
            directory (str): Directory in which to save the images.
            f_format (str): File format to save each image as,
                            given as 'png' or 'jpg'.

    """
    def __init__(self, directory: str, f_format: str) -> None:
        self.directory = directory
        self.f_format = f_format

    def __call__(self, epoch: int, handler: expansion.ColoredPointHandler) -> None:
        handler.export_as_img().save(f'{self.directory}/{epoch}.{self.f_format.lower()}')

class Print(Callback):
    """Callback to print the current epoch number and point count."""
    def __call__(self, epoch: int, handler: expansion.ColoredPointHandler) -> None:
        print(f'Epoch:  {epoch}, Point Count:    {len(handler.points)}')

class PygameGUI(Callback):
    """Callback to update a pygame GUI with ColoredPoint.arr
        Instantiates a Pygame window and clock.
        Sets window title as 'Expansion'.

        Args:
            length (int): Side length of square ColoredPointHandler.arr.
            dimensions (tuple)(int): Dimensions of pygame window.
            offset (tuple)(int): Offset of ColoredPointHandler.arr
                                 on pygame window, given as (x, y).
                                 Defaults to no offset (0, 0).
            tick (int): Tick to be passed to pygame.time.Clock.tick()
    """
    def __init__(self, length: int, dimensions: Tuple[int, int],
                 offset: Tuple[int, int] = (0, 0), tick: int = 60) -> None:
        self.offset = offset
        self.tick = tick
        self.window = pg.display.set_mode(dimensions)
        self.surface = pg.Surface((length, length)) # pylint: disable=too-many-function-args
        self.clock = pg.time.Clock()

        pg.display.set_caption('Expansion')

    def __call__(self, epoch: int, handler: expansion.ColoredPointHandler) -> None:
        arr = handler.export_as_arr()

        pg.surfarray.blit_array(self.surface, arr)
        self.window.blit(self.surface, self.offset)

        for event in pg.event.get():
            if event.type == pg.QUIT: # pylint: disable=no-member
                pg.quit() # pylint: disable=no-member
                sys.exit()

        pg.display.update()
        self.clock.tick(self.tick)

class _FunctionCallback(Callback):
    """Callback from a function.

        Args:
            func (callable): Function to instantiate a callback from,
                             Must have epoch and handler as positional arguments,
                             then keyword arguments that are fixed, before callback
                             is called.
            **kwargs: Keyword arguments to be passed to the function before simulation.
    """
    def __init__(self, func: Callable[[Any], None], **kwargs: Optional[Any]) -> None:
        self._func = func
        self.__dict__.update(**kwargs)

    def __call__(self, epoch: int, handler: expansion.ColoredPointHandler) -> None:
        func = self._func
        del self._func
        func(epoch, handler, **self.__dict__)
        self._func = func


def callback_from_function(func: Callable[[Any], None],
                           **kwargs: Optional[Any]) -> _FunctionCallback:
    """Instantiates a callback object from a function.
        Thin wrapper around expansion.callbacks._FunctionCallback.

        Args:
            func (callable): Function to instantiate a callback from,
                             Must have epoch and handler as positional arguments,
                             then keyword arguments that are fixed, before callback
                             is called.
            **kwargs: Keyword arguments to be passed to the function before simulation.

        Returns:
            (expansion.callbacks._FunctionCallback): Callback that can be called with
                                                     positional arguments,
                                                     'epoch' then 'handler'.
    """
    return _FunctionCallback(func, **kwargs)
