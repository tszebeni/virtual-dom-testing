/**
 * Example component to stop page rendering as we are leaving the page
 */
define('leave', [], function (require, module, exports) {
    'use strict';

    function leave() {
        var app = require('app');
        app.leave();
    }

    module.exports = leave;
});
