/**
 * Example component to render a main block
 */
define('main-component', ['deps/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var MainComponent = Component.create('main-component', {
        init: function () {
            var CountdownComponent = require('countdown-component');
            var TextComponent = require('text-component');
            var HTMLComponent = require('html-component');
            this.countdownComponent1 = new CountdownComponent();
            this.countdownComponent2 = new CountdownComponent({
                time: 60 * 60 * 10
            });
            this.countdownComponent3 = new CountdownComponent({
                time: 60 * 10
            });
            this.textComponent = new TextComponent({
                text: 'Lorem ipsum...'
            });
            this.htmlComponent = new HTMLComponent({
                html: '<div>Lorem <i>ipsum...</i><img src=x onerror=alert(\'hey!\')></div>'
            });
        },
        renderContents: function () {
            return [
                h('div', [
                    i18n('welcome.message'),
                    this.countdownComponent1.render(),
                    this.countdownComponent2.render(),
                    this.countdownComponent3.render(),
                    this.textComponent.render(),
                    this.htmlComponent.render()
                ])
            ];
        }
    });

    module.exports = MainComponent;
});
