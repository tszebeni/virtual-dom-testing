/**
 * Example component to render a countdown widget
 */
define('countdown-component', ['virtual-dom/h','component', 'i18n', 'timer'], function (require, module, exports, h, Component, i18n, Timer) {
    "use strict";

    var CountdownComponent = Component.create('countdown-component', {
        init: function () {
            this.timer = new Timer('timer1', this.options.time);
            this.startTimer();
        },
        startTimer: function () {
            this.timer.start();
        },
        renderContents: function () {
            return [
                h('p', [
                    i18n('countdown.remaining', this.timer.get())
                ])
            ];
        }
    });

    module.exports = CountdownComponent;
});
