/**
 * Utility functions
 */
define('functions', [], function (require, module) {
    'use strict';

    function debounce(fn, delay, scope) {
        var args;
        var timeout = null;
        var cb = function () {
            clearTimeout(timeout);
            timeout = null;
            fn.apply(scope || this, args);
        };
        return function () {
            args = arguments;
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(cb, delay);
        };
    }

    function tried (cb) {
        return function () {
            try{
                cb();
            } catch (e){
                return;
            }
        };
    }

    function tick(cb) {
        (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback) {
            window.setTimeout( callback, 1000 / 60 );
        }) (cb);
    }

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
        if (len <= 1) {
            return (len === 0 ? {} : args[0]);
        }
        return args.reduce(mergeInternal);
    }

    module.exports = {
        debounce: debounce,
        tried: tried,
        tick: tick,
        merge: merge
    };
});
