/**
 * Example component to render a text block
 */
define('text-component', ['virtual-dom/h', 'i18n', 'component'], function (require, module, exports, h, i18n, Component) {
    "use strict";

    var TextComponent = Component.create('text-component', {
        init: function () {
            this.text = this.options.text || '';
        },
        renderContents: function () {
            return [
                this.text
            ];
        }
    });

    module.exports = TextComponent;
});
