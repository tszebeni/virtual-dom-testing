/**
 * Simple parameter placeholder formatter.
 * TODO: add typeformatters
 */
define('format', [], function (require, module, exports) {

    var format = function format(msg, parameters) {
        msg = String(msg);
        parameters.forEach(function (parameter, i) {
            msg = msg.replace(new RegExp('\\{' + i + '\\}', 'g' ), parameter);
        });
        return msg;
    };

    module.exports = format;
});
