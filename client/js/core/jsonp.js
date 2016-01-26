/**
 * Made JSONP call easy
 */
define('jsonp', ['functions/merge', 'global'], function (require, module, exports, merge, global) {
    'use strict';

    var defaults = {
        url: '',
        data: {
            callback: ''
        }
    };

    function jsonp(url, opts) {
        opts = merge({}, defaults, opts);
        var scr = document.createElement('script');
        if (typeof opts.data.callback === 'function') {
            global.callbackUID = global.callbackUID || 0;
            var uid = global.callbackUID++;
            global['callback' + uid] = opts.data.callback;
            opts.data.callback = 'callback' + uid;
        }
        var flattenedUrl = url + '?';
        flattenedUrl += Object.keys(opts.data).map(function (key) {
             return key + '=' + encodeURIComponent(opts.data[key]);
        }).join('&');
        scr.type = 'text/javascript';
        scr.src = flattenedUrl;
        scr.addEventListener('onload', function () {
            document.getElementById('script-cache').innerHTML = null;
            if (global['callback' + uid]) {
                delete global['callback' + uid];
            }
        });
        document.getElementById('script-cache').appendChild(scr);
    }

    module.exports = jsonp;
});
