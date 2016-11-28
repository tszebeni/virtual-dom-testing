/**
 * Integration module for third party dependencies
 */
define('deps', ['anonymous0', 'hscript'], function (require, module, exports, deps, hscript) {
    'use strict';

    var assertionMessage = 'Dependencies should have the following api: {h:(),diff:(),patch:(),create:(), convert:(),xss:()}';

    assert(deps.h, assertionMessage);
    assert(deps.diff, assertionMessage);
    assert(deps.patch, assertionMessage);
    assert(deps.create, assertionMessage);
    assert(deps.xss, assertionMessage);
    assert(hscript, assertionMessage);


    module.exports = {
        h: deps.h,
        diff: deps.diff,
        patch: deps.patch,
        create: deps.create,
        xss: deps.xss,
        hscript: hscript
    };
});
