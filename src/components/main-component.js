/**
 * Example component to render a main block
 */
define('main-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    "use strict";

    function mainComponent(state) {

        var countdownComponent = require('countdown-component');

        return h('main',{
            className: 'component main-component',
            attributes: {
                'data-title': 'MainComponent'
            }
        }, [
            h('p', [
                i18n('welcome.message'),
                countdownComponent(state.comp1 || (state.comp1 = {
                    time: 10
                })),
                countdownComponent(state.comp2 || (state.comp2 = {
                    time: 14
                })),
                countdownComponent(state.comp3 || (state.comp3 = {
                    time: 32
                }))
            ])
        ]);
    }

    module.exports = mainComponent;
});
