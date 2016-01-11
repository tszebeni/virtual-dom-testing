/**
 * Example component to render a grid block
 */
define('grid-component', ['virtual-dom/h', 'component'], function (require, module, exports, h, Component) {
    "use strict";

    var GridComponent = Component.create('grid-component', {});

    module.exports = GridComponent;
});
