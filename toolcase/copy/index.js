Object.prototype.copy = Array.prototype.copy = function () {
    let obj = this.constructor === Array ? [] : {};
    for (let i in this) {
        if (!this.hasOwnProperty(i)) continue;
        let clone = this[i];
        if (clone == obj) continue;
        if (typeof clone === 'object') {
            obj[i] = clone.constructor === Array ? [] : {};
            obj[i] = clone.copy()
        } else {
            obj[i] = clone;
        };
    };
    return obj;
}
