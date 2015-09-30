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
                countdownComponent(state.get('timer1')),
                countdownComponent(state.get('timer2')),
                countdownComponent(state.get('timer3'))
            ])
        ]);
    }

    module.exports = mainComponent;
});
