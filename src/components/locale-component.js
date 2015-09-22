/**
 * Example component to render a locale switcher
 */
define('locale-component', ['virtual-dom/h', 'i18n', 'message-source'], function (require, module, exports, h, i18n, messageSource) {
    "use strict";

    var locales = messageSource.locales;
    var activeLocale = messageSource.locale;

    var locale = function (locale) {
        return h('a', {
                style: {
                    display: 'block'
                },
                onclick: function (event) {
                    messageSource.setLocale(locale);
                    if (history && history.pushState) {
                        history.pushState(null, null, this.href);
                        event.preventDefault();
                    }
                },
                className: (activeLocale === locale ? 'active':''),
                href: '?locale=' + locale
            },[
                i18n('locale.switcher', locale)
            ]);
    };

    function localeComponent() {

        return h('div', {
                className: 'component locale-component',
                attributes: {
                    'data-title': 'LocaleComponent'
                }
            }, [
                locales.map(locale)
            ]);
    }

    module.exports = localeComponent;
});
