/**
 * Example component to render a footer block
 */
define('footer-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    'use strict';

    function footerComponent(state) {
        return h('footer',{
            className: 'component footer-component',
            attributes: {
                'data-title': 'FooterComponent'
            }
        }, [
            h('p', [
                i18n('footer.copyright', state.year)
            ])
        ]);
    }

    module.exports = footerComponent;
});
