/**
 * Message source for I18n logic, loads and holds translations
 * TODO: make it configurable
 * TODO: merge translations
 */
define('message-source', ['format','request', 'global'], function (require, module, exports, format, request, global) {

    var supportedLocales = ['en', 'hu'];
    var defaultLocale = supportedLocales[0];
    var localeParam = 'locale';
    var locale = defaultLocale;

    var path = 'locales/translation_{0}.json'; // parameter: supported locale
    var messageSource = {};

    if (global.defaultTranslations) {
        messageSource = global.defaultTranslations;
    }
    if (global.defaultLocale) {
        defaultLocale = global.defaultLocale;
    }

    var parameters = request.params;
    if (parameters[localeParam]) {
        var suggestedLocale = parameters[localeParam];
        if (supportedLocales.indexOf(suggestedLocale)) {
            locale = suggestedLocale;
        }
    }

    function setLocale (locale_) {
        request(format(path, locale_), {
            cache: true
        }).then(function (response) {
            messageSource[locale_] = JSON.parse(response);
            locale = locale_;
            var i18n = require('i18n');
            i18n.reset();
        }, function () {
            assert(locale !== defaultLocale, 'Failed to load translations for defaultLocale: ' + defaultLocale);
        });
    }
    setLocale(locale);

    function get(key) {
        locale = locale || defaultLocale;
        if (!messageSource[locale]) {
            return '';
        } else {
            return messageSource[locale][key];
        }
    }

    module.exports = get;
    module.exports.setLocale = setLocale;
    module.exports.locales = supportedLocales;
    module.exports.locale = locale;
});
