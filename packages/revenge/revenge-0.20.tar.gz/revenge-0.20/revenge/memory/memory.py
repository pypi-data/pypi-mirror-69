
import logging
logger = logging.getLogger(__name__)

from prettytable import PrettyTable
import binascii
import operator
import struct
from termcolor import cprint, colored

from .. import common, types, symbols

class Memory(object):
    """Class to simplify getting and writing things to memory.
    
    Examples:
        .. code-block:: python3

            # Read a signed 8-bit int from address
            memory[0x12345].int8

            # Returns MemoryBytes object for memory
            memory[0x12345:0x12666]

            # Write int directly to memory
            memory[0x12345] = types.Int8(12)

            # Write string directly to memory
            memory[0x12345] = types.StringUTF8("hello!")
    """

    def __init__(self, engine):
        self._engine = engine

        # Keep track of where we've inserted breakpoints
        # key == address of breakpoint, value == memory location to un-breakpoint it
        self._active_breakpoints = {}

        # Keep track of what we've allocated.
        # key == address of allocation, value = script where we allocated it.
        # NOTE: It's important to keep the script alive until we're done with the alloc or javascript might gc it.
        self._allocated_memory = {}

        # key == address of replaced function, value = tuple: what it's being replaced with, script so we can unload later
        self._active_replacements = {}

        # key == address of onEnter function, value = tuple: what it's being hooked with, script so we can unload later
        self._active_on_enter = {}

    """
    def __new__(klass, process, engine=None):
        
        # If we're in a proper subclass, don't monkey with the engine
        if engine is False:
            return super(Memory, klass).__new__(klass)

        if engine is None:
            engine = process._engine

        mod = importlib.import_module('...engines.{engine}.memory'.format(engine=engine), package=__name__)
        return super(Memory, klass).__new__(mod.Memory)
    """

    @common.implement_in_engine()
    def alloc(self, size):
        """Allocate size bytes of memory and get a MemoryBytes object back to use it.
    
        Args:
            size (int): How many bytes to allocate.

        Returns:
            revenge.memory.MemoryBytes: Object for the new memory location.
        """
        pass

    @common.validate_argument_types(struct=types.Struct)
    def alloc_struct(self, struct):
        """Short-hand to alloc appropriate space for the struct and write it in.
        
        Args:
            struct (revenge.types.Struct): The struct to write into memory.

        Returns:
            revenge.types.Struct: The original struct, but now bound to the
            new memory location.
        """
        struct._process = self._process

        # Allocate the amount of size needed
        mem = self.alloc(struct.sizeof)
        
        # Write the struct in memory
        mem.struct = struct

        # Tell the struct object where the memory is
        struct.memory = mem

        # Return the struct
        return struct

    def alloc_string(self, s, encoding='latin-1'):
        """Short-hand to run alloc of appropriate size, then write in the string.
        
        Args:
            s (bytes, str): String to allocate
            encoding (str, optional): How to encode the string if passed in as type str.
        """

        # TODO: Smart guess encoding, linux is usually utf-8, Windows has function call to determine utf-8 vs 16. Mac...?

        if type(s) in [types.StringUTF8, types.StringUTF16]:
            if s.type == 'utf8':
                encoding = 'utf-8'
            elif s.type == 'utf16':
                encoding = 'utf-16'
            else:
                logger.error('How did i get here??')
                return

            s = str(s)
        
        if type(s) is str:
            s = s.encode(encoding)
            if encoding == 'utf-16':
                s = s[2:] # Remove BOM
                s += b'\x00' # Extra null at end of utf-16
        

        if type(s) is not bytes:
            logger.error("Invalid string type of {}".format(type(s)))
            return None
        
        # Null terminate
        s += b'\x00'

        mem = self.alloc(len(s))
        mem.bytes = s
        return mem

    def find(self, *args, **kwargs):
        """Search for thing in memory. Must be one of the defined types."""
        return self._MemoryFind(self._engine, *args, **kwargs)

    def describe_address(self, address, color=False):
        """Takes in address and attempts to return a better description of what's there.
        
        Args:
            address (int): What address to describe
            color (bool, optional): Should the description be colored?
                (default: False)

        Returns:
            str: description of the address
        """

        if isinstance(address, symbols.Symbol):
            address = address.address

        if isinstance(address, types.Telescope):
            address = int(address)

        assert isinstance(address, int), "Unexpected address type of {}".format(type(address))

        desc = ""
        module = self._process.modules[address]

        if module is not None:
            if color:
                desc += colored(module.name,"magenta") or ""
            else:
                desc += module.name or ""

            try:
                # If we can find a closest function, use that.
                func_name, func_addr = next((name, addr.address) for name,addr in sorted(module.symbols.items(), key=operator.itemgetter(1),reverse=True) if address >= addr)
                func_name = str(func_name)

                offset = address - func_addr

                # This is probably not really the function
                if func_name.startswith('plt.') and offset >= 0x10:
                    raise StopIteration

                if color:
                    desc += ":" + colored(func_name, "magenta", attrs=["bold"])
                else:
                    desc += ":" + func_name

            except StopIteration:
                # We did not find a closest function, just offset from module base
                offset = address - module.base

            if offset != 0:
                if color:
                    desc += "+" + colored(hex(offset), "cyan")
                else:
                    desc += "+" + hex(offset)

        else:
            if color:
                desc += colored(hex(address), "cyan")
            else:
                desc += hex(address)

        return desc

    def _type_to_search_string(self, thing):
        """Converts the given object into something relevant that can be fed into a memory search query."""

        if not isinstance(thing, types.all_types):
            logger.error("Please use valid type.")
            return None

        endian_str = "<" if self._process.endianness == 'little' else '>'

        if isinstance(thing, types.StringUTF8):
            # Normal string
            return binascii.hexlify(thing.encode('utf-8')).decode()

        elif isinstance(thing, types.StringUTF16):
            # Wide Char String (Windows/UTF16)
            return binascii.hexlify(thing.encode('utf-16')[2:]).decode()

        elif isinstance(thing, types.UInt8):
            return binascii.hexlify(struct.pack(endian_str + "B", thing)).decode()

        elif isinstance(thing, types.Int8):
            return binascii.hexlify(struct.pack(endian_str + "b", thing)).decode()

        elif isinstance(thing, types.UInt16):
            return binascii.hexlify(struct.pack(endian_str + "H", thing)).decode()

        elif isinstance(thing, types.Int16):
            return binascii.hexlify(struct.pack(endian_str + "h", thing)).decode()

        elif isinstance(thing, types.UInt32):
            return binascii.hexlify(struct.pack(endian_str + "I", thing)).decode()

        elif isinstance(thing, types.Int32):
            return binascii.hexlify(struct.pack(endian_str + "i", thing)).decode()

        elif isinstance(thing, types.UInt64):
            return binascii.hexlify(struct.pack(endian_str + "Q", thing)).decode()

        elif isinstance(thing, types.Int64):
            return binascii.hexlify(struct.pack(endian_str + "q", thing)).decode()
        
        else:
            logger.error("Unexpected type to convert of {}".format(type(thing)))
            return None
        

    def __getitem__(self, item):

        if type(item) == str:
            # Assume it's something we need to resolve
            item = self._process.modules.lookup_symbol(item)

        if isinstance(item, symbols.Symbol):
            item = item.address

        if isinstance(item, types.Telescope):
            item = int(item)

        if isinstance(item, int):
            return self._MemoryBytes(self._engine, item)

        elif type(item) == slice:

            if item.start is None or item.stop is None or item.step is not None:
                logger.error("Memory slices must have start and stop and not contain a step option.")
                return

            return self._MemoryBytes(self._engine, item.start, item.stop)

        logger.error("Unhandled memory type of {}".format(type(item)))

    def __setitem__(self, index, value):

        if not isinstance(value, types.all_types):
            logger.error("When implicitly memory writing, you MUST use an instantiation of revenge.types.*")
            return

        # Grab the mem
        mem = self._engine.memory[index]

        # TODO: Implement char?
        if isinstance(value, types.Struct):
            mem.struct = value

        elif isinstance(value, types.Int8):
            mem.int8 = value

        elif isinstance(value, types.UInt8):
            mem.uint8 = value

        elif isinstance(value, types.Int16):
            mem.int16 = value

        elif isinstance(value, types.UInt16):
            mem.uint16 = value

        elif isinstance(value, types.Int32):
            mem.int32 = value

        elif isinstance(value, types.UInt32):
            mem.uint32 = value

        elif isinstance(value, types.Int64):
            mem.int64 = value

        elif isinstance(value, types.UInt64):
            mem.uint64 = value

        elif isinstance(value, types.Double):
            mem.double = value

        elif isinstance(value, types.Float):
            mem.float = value

        elif isinstance(value, types.Pointer):
            mem.pointer = value

        elif isinstance(value, types.StringUTF8):
            mem.string_utf8 = value

        elif isinstance(value, types.StringUTF16):
            mem.string_utf16 = value

        else:
            logger.error("Unhandled memory write type of {}".format(type(value)))


    @property
    def maps(self):
        """Return a list of memory ranges that are currently allocated."""
        return self._MemoryMap(self._engine)

    def __str__(self):
        
        table = PrettyTable(['range', 'prot', 'file'])
        table.header = False
        table.align = 'l'
        table.border = False

        for range in self.maps:
            table.add_row([
                hex(range.base)[2:] + '-' + hex(range.base+range.size)[2:],
                range.protection,
                range.file or '',
                ])

        return str(table)

    @property
    def _process(self):
        return self._engine._process

from ..exceptions import *
#Memory.find.__doc__ = MemoryFind.__init__.__doc__
