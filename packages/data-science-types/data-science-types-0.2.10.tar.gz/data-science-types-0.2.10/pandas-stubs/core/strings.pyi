from .series import Series

class StringMethods:
    def contains(
        self, pat: str, case: bool = ..., flags: int = ..., na: float = ..., regex: bool = ...
    ) -> Series[bool]: ...
