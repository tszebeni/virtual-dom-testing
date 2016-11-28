/**
 * Simple parameter placeholder formatter.
 */
define('format', [], function (require, module) {
    'use strict';

    function format(msg /*, parameters */) {
        msg = String(msg);
        var parameters = Array.prototype.slice.call(arguments, 1);
        if (parameters.length) {
            parameters.forEach(function (parameter, i) {
                msg = msg.replace(new RegExp('\\{' + i + '\\}', 'g' ), parameter);
            });
        }
        return msg;
    }

    module.exports = format;
});
