import sys
from typing import Any, Callable, Dict, List, Optional, Protocol, TextIO, TypeVar, Union, overload

__all__: List[str]

if sys.version_info >= (3, 8):
    __version__: str
else:
    __version__ = None

PrintFuncArg = TypeVar('PrintFuncArg')
PrintFuncReturn = TypeVar('PrintFuncReturn')

class PrintFuncText(Protocol):
    def __call__(self, __text: PrintFuncArg, *__args: Any, **__kwargs: Any) -> PrintFuncReturn: ...

class PrintFuncObjects(Protocol):
    def __call__(self, *__objects: PrintFuncArg, **__kwargs: Any) -> PrintFuncReturn: ...

@overload
def echo(
    __text: PrintFuncArg,
    newline: bool = ...,
    newline_char: str = ...,
    end: str = ...,
    print_func: PrintFuncText = ...,
    print_func_kwargs: Dict[str, Any] = ...,
) -> PrintFuncReturn: ...
@overload
def echo(
    *objects: PrintFuncArg,
    newline: bool = ...,
    newline_char: str = ...,
    end: str = ...,
    print_func_kwargs: Dict[str, Any] = ...,
) -> PrintFuncReturn: ...
def echo(
    *objects: PrintFuncArg,
    newline: bool = ...,
    newline_char: str = ...,
    end: str = ...,
    print_func: PrintFuncObjects = ...,
    print_func_kwargs: Dict[str, Any] = ...,
) -> PrintFuncReturn: ...
