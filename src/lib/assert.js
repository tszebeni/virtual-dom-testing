/**
 * Simple assert in global scope
 */
(function (global) {
    "use strict";

    global.assert = function assert(expression, message) {
        if (!message) {
            message = "Asserion error";
        }
        if (!expression) {
            throw new Error(message);
        }
    };

})(this);
