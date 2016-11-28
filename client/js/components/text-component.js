/**
 * Example component to render a text block
 */
define('text-component', ['deps/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    'use strict';

    var TextComponent = Component.create('text-component', {
        contents: [
            function () {
                return [
                    this.options.text
                ];
            }
        ]
    });

    module.exports = TextComponent;
});
