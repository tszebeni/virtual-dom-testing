/**
 * Example component to render a main block
 */
define('main-component', ['deps/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var CountdownComponent = require('countdown-component');
    var TextComponent = require('text-component');
    var HTMLComponent = require('html-component');
    var GridComponent = require('grid-component');

    var MainComponent = Component.create('main-component', {
        contents: [
            function () {
                return h('div', [
                    i18n('welcome.message')
                ]);
            },
            function () {
                return h('div', {
                    style: {
                        marginTop: '10px'
                    }
                },[
                    i18n('grid.intro')
                ]);
            },
            new GridComponent({
                slots: [
                    {'class': 'col-5', contents: [
                        new CountdownComponent(),
                        new CountdownComponent({
                            time: 60 * 60 * 10
                        })
                    ]},
                    {'class': 'col-7', contents: [
                        new CountdownComponent({
                            time: 60 * 10
                        }),
                        new TextComponent({
                            text: 'Lorem ipsum...'
                        })
                    ]}
                ]
            }),
            new HTMLComponent({
                html: '<div>Custom html component <strong title="you can have titles also!">which</strong> contains <i>formatting</i> and secured against xss attacks...<img js=x onerror=alert(\'hey!\')></div>'
            })
        ]
    });

    module.exports = MainComponent;
});
