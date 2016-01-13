/**
 * Example component to render a footer block
 */
define('footer-component', ['deps/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var FooterComponent = Component.create('footer-component', {
        contents: [
            h('p', [
                i18n('footer.copyright', '2015')
            ])
        ]
    });

    module.exports = FooterComponent;
});
