/**
 * Integration module for third party virtual dom
 */
define('anonymous0', [], function (require, module, exports) {
    "use strict";
    var noop = function () {};
    var virtualDom = {
        h: noop,
        diff: noop,
        patch: noop,
        create: noop
    };

    module.exports = virtualDom;
});
