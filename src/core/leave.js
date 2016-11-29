/**
 * Example component to stop page rendering as we are leaving the page
 * TODO: wire to onbeforeunload?
 */
define('leave', [], function (require, module) {
    'use strict';

    function leave() {
        var app = require('app');
        app.leave();
    }

    module.exports = leave;
});
