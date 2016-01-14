/**
 * Merge object's properties
 * TODO: move to functions
 */
define('merge', [], function (require, module, exports) {
    "use strict";

    function mergeInternal(a, b) {
        if (a && !b) {
            return b;
        }
        if (a === b) {
            return a;
        }
        if (b && b.type && b.type === 'VirtualNode') {
            a = b;
            return a;
        }
        Object.keys(b).forEach(function(key) {
            if (!a[key]) {
                a[key] = b[key];
            } else {
                a[key] = mergeInternal(a[key], b[key]);
            }
        });
        return a;
    }

    function merge(){
        var args = [].slice.call(arguments);
        var len = args.length;
        var i = 1;
        if (len <= 1) {
            return (len === 0 ? {} : args[0]);
        }
        return args.reduce(mergeInternal);
    }


    module.exports = merge;
});
