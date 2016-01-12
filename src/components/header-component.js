/**
 * Example component to render a header
 */
define('header-component', ['deps/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var HeaderComponent = Component.create('header-component', {
        init: function () {
            this.localeComponent = new (require('locale-component'))();
            this.debugComponent = new (require('debug-component'))();
        },
        renderContents: function () {
            return [
                h('h1', [
                    i18n('header.message')
                ]),
                this.localeComponent.render(), this.debugComponent.render()
            ];
        }
    });

    module.exports = HeaderComponent;
});
