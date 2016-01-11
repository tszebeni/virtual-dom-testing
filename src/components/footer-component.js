/**
 * Example component to render a footer block
 */
define('footer-component', ['virtual-dom/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var FooterComponent = Component.create('footer-component', {
        renderContents: function () {
            return [
                h('p', [
                    i18n('footer.copyright', '2015')
                ])
            ];
        }
    });

    module.exports = FooterComponent;
});
