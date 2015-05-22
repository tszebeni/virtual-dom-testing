/**
 * Example component to render a header
 */
define('header-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    "use strict";

    var count = 0;

    var headerComponent = function headerComponent() {
        return h('header',{
            className: 'component header-component',
            onclick: function (event) {
                count++;
            }
        }, [
            h('h1', [
                i18n('header.message', String(count))
                ])
            ]);
    };

    module.exports = headerComponent;
});
