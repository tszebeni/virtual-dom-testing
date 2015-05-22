 define('header-component', ['virtual-dom/h'], function (require, module, exports, h) {
    "use strict";

    var headerComponent = function headerComponent(count) {
        return h('span', [String(count)]);
    };

    module.exports = headerComponent;
});
