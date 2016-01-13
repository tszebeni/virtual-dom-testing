/**
 * Example component to render a main block
 */
define('main-component', ['deps/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var CountdownComponent = require('countdown-component');
    var TextComponent = require('text-component');
    var HTMLComponent = require('html-component');

    var MainComponent = Component.create('main-component', {
        contents: [
            function () {
                return h('div', [
                    i18n('welcome.message')
                ]);
            },
            new CountdownComponent(),
            new CountdownComponent({
                time: 60 * 60 * 10
            }),
            new CountdownComponent({
                time: 60 * 10
            }),
            new TextComponent({
                text: 'Lorem ipsum...'
            }),
            new HTMLComponent({
                html: '<div>Lorem <i>ipsum...</i><img src=x onerror=alert(\'hey!\')></div>'
            })
        ]
    });

    module.exports = MainComponent;
});
