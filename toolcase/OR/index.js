Array.prototype.OR = function () {
    var R = false;
    for (var i = 0; i < this.length; i++) {
        R = R || this[i]
    };
    return R
}