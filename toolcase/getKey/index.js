Array.prototype.getKeys = function (v) {
    var r = []
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) {
            r.push(i)
        }
    };
    return r
}
Object.prototype.getKeys = function (v) {
    var r = [];
    for (var i in this) {
        if (this[i] === v) {
            r.push(i)
        }
    };
    return r
}