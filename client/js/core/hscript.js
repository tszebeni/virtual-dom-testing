/**
 * Integration module for html to hscript script if included or use service
 */
define('hscript', ['jsonp'], function (require, module, exports, jsonp) {
    "use strict";

    var hscriptServer = 'http://localhost:8080/api/hscript.js';

    function hscript_service(str, cb) {
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
        hscript = hscript_service;
    }

    module.exports = hscript;
});
