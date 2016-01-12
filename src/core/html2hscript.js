/**
 * Integration module for third party html to hscript package
 */
define('html2hscript', ['anonymous1'], function (require, module, exports, html2hscript) {
    "use strict";

    var assertionMessage = 'html2hscript should have the following api: {convert:(),xss:()}';

    assert(html2hscript.convert, assertionMessage);
    assert(html2hscript.xss, assertionMessage);

    module.exports = html2hscript;
});
