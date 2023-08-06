// Resolve the normal function/symbol stuff into a solid address

var symbol = "FUNCTION_SYMBOL_HERE";
var module = "FUNCTION_MODULE_HERE";
var offset = FUNCTION_OFFSET_HERE;

if ( module == "" ) {
    module = null;
}

if ( symbol != "" ) {
    var func_ptr = Module.getExportByName(module, symbol).add(offset);
} else {
    //var func_ptr = ptr(Number(Module.getBaseAddress(module)) + offset)
    var func_ptr = Module.getBaseAddress(module).add(offset);
}

send(func_ptr);
