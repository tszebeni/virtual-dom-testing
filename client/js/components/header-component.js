/**
 * Example component to render a header
 */
define('header-component', ['deps/h', 'i18n', 'component', 'locale-component', 'debug-component'], function (require, module, exports, h, i18n, Component, LocaleComponent, DebugComponent) {
    "use strict";

    var HeaderComponent = Component.create('header-component', {
        contents:  [
            function () {
                return h('h1', [
                    i18n('header.message')
                ])
            },
            new LocaleComponent(),
            new DebugComponent()
        ]
    });

    module.exports = HeaderComponent;
});
