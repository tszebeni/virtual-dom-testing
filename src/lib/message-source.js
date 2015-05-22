/**
 * Message source for I18n logic, loads and holds translations
 * TODO: make it configurable
 */
define('message-source', ['format','request'], function (require, module, exports, format, request) {

    var supportedLocales = ['en', 'hu'];
    var defaultLocale = supportedLocales[0];
    var localeParam = 'locale';
    var locale = defaultLocale;

    var path = 'locales/translation_{0}.json'; // parameter: supported locale
    var messageSource = {};

    var get = function get(key) {
        locale = locale || defaultLocale;
        if (!messageSource[locale]) {
            request(format(path, [locale]), function (response) {
                if (response) {
                    messageSource[locale] = JSON.parse(response);
                } else {
                    assert(locale !== defaultLocale, 'Failed to load translations for defaultLocale: ' + defaultLocale);
                    locale = defaultLocale;
                    get(key, locale);
                }
            });
        }
        return messageSource[locale][key];
    };

    var parameters = request.paramDecode();
    if (parameters[localeParam]) {
        var suggestedLocale = parameters[localeParam]
        if (supportedLocales.indexOf(suggestedLocale)) {
            locale = suggestedLocale;
        }
    }

    module.exports = get;
    module.exports.locales = supportedLocales;
    module.exports.locale = locale;
});
