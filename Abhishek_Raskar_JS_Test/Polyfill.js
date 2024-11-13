// Map
if (!Array.prototype.map) {
    Array.prototype.map = function (cb) {
        if (this === null) {
            throw new TypeError("Error in map")
        }
        let res = [];
        for (let i = 0; i < this.length; i++) {
            res.push(cb(this[i], i, this))
        }
        return res;
    }
}

// Reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (cb, initialValue) {
        if (this === null || this === undefined) {
            throw new TypeError("Error reduce of null / undefined");
        }
        let acc = initialValue !== undefined ? initialValue : this[0];
        
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            acc = cb(acc, this[i], i, this);
        }
        return acc;
    };
}

// Filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function (cb) {
        if (this === null) {
            throw new TypeError("Error")
        }
        let res = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                res.push(this[i])
            }
        }
        return res;
    }
}
