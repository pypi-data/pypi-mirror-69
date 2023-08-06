import logging
logger = logging.getLogger(__name__)

from .. import common, types, exceptions

class MemoryRange(object):

    def __init__(self, engine, base, size, protection, file=None):
        self._engine = engine
        self._process = self._engine._process
        self.base = base
        self.size = size
        self.protection = protection
        self._file = file

    @common.implement_in_engine()
    def set_protection(self, read, write, execute):
        """Sets the protection for this memory page.

        Args:
            read (bool): Allow read?
            write (bool): Allow write?
            execute (bool): Allow execute?

        This will call appropriate mprotect or similar. This can be done
        implicitly from the .protection property.
        """
        pass

    def __repr__(self):
        value = ["MemoryRange", hex(self.base), '-', hex(self.base+self.size), self.protection]
        if self.file is not None:
            value.append(self.file + ":" + hex(self.file_offset))
        return '<' + ' '.join(value) + '>'

    def __hash__(self):
        return hash((self.base, self.size, self.protection, self.file))

    @property
    def file(self):
        """str: File backing this memory range, or None."""
        if self._file is None:
            return None

        return self._file['path']

    @property
    def file_offset(self):
        """int: Offset into backing file or None."""
        if self._file is None:
            return None

        return self._file['offset']

    @property
    def readable(self):
        """bool: Is this range readable?"""
        return self.protection[0] == 'r'

    @property
    def writable(self):
        """bool: Is this range writable?"""
        return self.protection[1] == 'w'

    @property
    def executable(self):
        """bool: Is this range executable?"""
        return self.protection[2] == 'x'

    @property
    def protection(self):
        """str: Protection for this range."""
        return self.__protection

    @protection.setter
    def protection(self, protection):
        assert type(protection) is str
        assert len(protection) == 3
        protection = protection.lower()

        # If we're setting for the first time, assume it's correct
        if not hasattr(self, '_MemoryRange__protection'):
            self.__protection = protection

        # Set protection if it's not already this
        elif protection != self.protection:
            self.set_protection(
                protection[0] == "r",
                protection[1] == "w",
                protection[2] == "x",
                )

    @property
    def size(self):
        """int: Size for this range."""
        return self.__size

    @size.setter
    def size(self, size):
        self.__size = common.auto_int(size)

    @property
    def base(self):
        """int: Base address for this range."""
        return self.__base

    @base.setter
    def base(self, base):
        self.__base = types.Pointer(common.auto_int(base))

