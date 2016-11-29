/**
 * Example component to render a countdown widget
 */
define('countdown-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    'use strict';

    function countdownComponent(state) {
        if (!state.timer) {
            state.timer = setInterval(function () {
                if (state.time === 0) {
                    clearInterval(state.timer);
                    state.timer = null;
                    return;
                }
                state.time--;
            }, 1000);
        }

        return h('div',{
            className: 'component countdown-component',
            attributes: {
                'data-title': 'DebugComponent'
            }
        }, [
            h('p', [
                i18n('countdown.remaining', state.time)
            ])
        ]);
    }

    module.exports = countdownComponent;
});
