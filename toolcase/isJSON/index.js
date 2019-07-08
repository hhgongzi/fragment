import f from "../$isPlainObject"
Object.prototype.isJSON=function (){
    return f(this)
}