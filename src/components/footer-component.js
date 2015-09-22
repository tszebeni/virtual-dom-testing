/**
 * Example component to render a footer block
 */
define('footer-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    "use strict";

    function footerComponent() {
        return h('footer',{
            className: 'component footer-component',
            attributes: {
                'data-title': 'FooterComponent'
            }
        }, [
            h('p', [
                i18n('footer.copyright', '2015')
            ])
        ]);
    }

    module.exports = footerComponent;
});
