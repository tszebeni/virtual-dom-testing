/**
 * I18n logic to resolve message keys and substitute parameters
 */
define('i18n', ['format', 'message-source'], function (require, module, exports, format, messageSource) {
    var messages = {};

    var resolve = function resolve(key /*, parameters */) {
        var parameters = Array.prototype.slice.call(arguments, 1);
        var message = messages[key] || (messages[key] = messageSource(key));
        if (!message) {
            message = key;
        }
        return format(messages[key], parameters);
    };

    module.exports = resolve;
    module.exports.format = format;
});
