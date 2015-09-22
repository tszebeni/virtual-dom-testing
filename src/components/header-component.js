/**
 * Example component to render a header
 */
define('header-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    "use strict";

    var headerComponent = function headerComponent() {

        var localeComponent = require('locale-component');
        var debugComponent = require('debug-component');

        var ret = h('header',{
            className: 'component header-component',
            attributes: {
                'data-title': 'HeaderComponent'
            }
        }, [
            h('h1', [
                i18n('header.message')
            ]),
            localeComponent(), debugComponent()
        ]);

        return ret;
    };

    module.exports = headerComponent;
});
