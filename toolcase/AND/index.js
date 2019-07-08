Array.prototype.AND = function () {
    var R = true;
    for (var i = 0; i < this.length; i++) {
        R = R && this[i]
    };
    return R
}