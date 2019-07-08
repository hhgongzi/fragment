var class2type = {
    "[object Array]": "array",
    "[object Boolean]": "boolean",
    "[object Date]": "date",
    "[object Error]": "error",
    "[object Function]": "function",
    "[object Number]": "number",
    "[object Object]": "object",
    "[object RegExp]": "regexp",
    "[object String]": "string",
    "[object Symbol]": "symbol"
};
var toString = class2type.toString;

export function $type(obj) {
    if (obj == null) { return obj + ""; }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[toString.call(obj)] || "object" :
        typeof obj;
};
export default $type;