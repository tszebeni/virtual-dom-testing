/**
 * Example component to render a locale switcher
 */
define('locale-component', ['deps/h', 'i18n', 'message-source', 'component'], function (require, module, exports, h, i18n, messageSource, Component) {
    'use strict';

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

    var LocaleComponent = Component.create('locale-component', {
        renderContents: function () {
            return [
                locales.map(locale)
            ];
        }
    });

    module.exports = LocaleComponent;
});
