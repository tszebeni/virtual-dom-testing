/**
 * Utility functions
 */
define('functions', [], function (require, module, exports) {

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
            } catch (e){}
        };
    }

    function tick(cb) {
        (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
            window.setTimeout( callback, 1000 / 60 );
        }) (cb);
    }

    module.exports = {
        debounce: debounce,
        tried: tried,
        tick: tick
    };
});
