(function (global) {

    global.assert = function assert(expression, message) {
        if (!message) {
            message = "Asserion error";
        }
        if (!expression) {
            throw new Error(message);
        }
    };

})(this);
