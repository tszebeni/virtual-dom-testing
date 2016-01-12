/**
 * Integration module for third party dependencies
 */
define('deps', ['anonymous0'], function (require, module, exports, dependencies) {
    "use strict";

    var assertionMessage = 'Dependencies should have the following api: {h:(),diff:(),patch:(),create:(), convert:(),xss:()}';

    assert(dependencies.h, assertionMessage);
    assert(dependencies.diff, assertionMessage);
    assert(dependencies.patch, assertionMessage);
    assert(dependencies.create, assertionMessage);

    assert(dependencies.hscript, assertionMessage);
    assert(dependencies.xss, assertionMessage);

    module.exports = dependencies;
});
