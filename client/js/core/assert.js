/**
 * Simple assert in global scope
 */
(function (global) {
    'use strict';

    global.assert = function assert(expression, message) {
        if (!message) {
            message = 'Assertion Error';
        }
        if (!expression) {
            throw new Error(message);
        }
        return expression;
    };

})(this);
