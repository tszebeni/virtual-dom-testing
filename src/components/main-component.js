/**
 * Example component to render a main block
 */
define('main-component', ['virtual-dom/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var MainComponent = Component.create('main-component', {
        init: function () {
            var CountdownComponent = require('countdown-component');
            this.countdownComponent1 = new CountdownComponent();
            this.countdownComponent2 = new CountdownComponent({
                time: 60 * 60 * 10
            });
            this.countdownComponent3 = new CountdownComponent({
                time: 60 * 10
            });
        },
        renderContents: function () {
            return [
                h('p', [
                    i18n('welcome.message'),
                    this.countdownComponent1.render(),
                    this.countdownComponent2.render(),
                    this.countdownComponent3.render()
                ])
            ];
        }
    });

    module.exports = MainComponent;
});
