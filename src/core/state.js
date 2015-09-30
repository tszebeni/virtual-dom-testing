/**
 * State manager
 */
define('state', ['request', 'format'], function (require, module, exports, request, format) {

    var url = 'states/{0}.json'; // parameter: key attribute

    var State = function State(key) {
        this.key = key;
        this.states_ = {};
        this.promise = this.fetch();
        var state = this;
        this.promise.then(function (result) {
            var json = JSON.parse(result);
            Object.keys(json).forEach(function (key) {
                state[key] = json[key];
            });
        });
    };

    State.prototype = {
        fetch: function () {
            if (this.key) {
                return request(format(url, this.key));
            } else {
                return Promise.resolve('{}');
            }
        },
        get: function (key) {
            if (!this.states_[key]) {
                this.states_[key] = new State(key);
            }
            return this.states_[key];
        },
        clear: function () {
            this.props_ = {};
            this.states_.forEach(function () {
                this.clear();
            });
        }
    };

    module.exports = new State();
});
