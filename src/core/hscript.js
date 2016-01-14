/**
 * Integration module for third party dependencies
 */
define('hscript', ['jsonp'], function (require, module, exports, jsonp) {
    "use strict";

    var hscriptServer = 'http://localhost:8080';

    function hscript_light(str, cb) {
        jsonp(hscriptServer, {
            data: {
                html: str,
                callback: function (hscript) {
                    cb(null, hscript);
                }
            }
        });
    }
    var hscript;
    try {
         hscript = require('anonymous1').hscript;
    } catch (e) {
        hscript = hscript_light;
    }

    module.exports = hscript;
});
