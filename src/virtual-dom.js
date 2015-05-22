define('virtual-dom', ['anonymous0'], function (require, module, exports, virtualDom) {
    "use strict";

    var assertionMessage = 'virtualDom should have the following api: {h:(),diff:(),patch:(),create:()}';

    assert(virtualDom.h, assertionMessage);
    assert(virtualDom.diff, assertionMessage);
    assert(virtualDom.patch, assertionMessage);
    assert(virtualDom.create, assertionMessage);

    module.exports = virtualDom;
});
