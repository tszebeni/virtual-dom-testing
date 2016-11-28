/**
 * State manager
 */
define('state', ['request', 'format'], function (require, module, exports, request, format) {

    var url = 'states/{0}.json'; // parameter: key attribute

    var State = function State(key) {
        this.states_ = {};
        if (typeof key  !== "string") {
            var json = JSON.stringify(key);
            this.promise = Promise.resolve(json);
        } else {
            this.key = key;
            this.promise = this.fetch();
        }
        this.promise.then(function (result) {
            var json = JSON.parse(result);
            Object.keys(json).forEach(function (key) {
                this[key] = json[key];
            }.bind(this));
        }.bind(this), function () {
            console.log("state cannot be loaded: " + this.key);
        }.bind(this));
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
            this.states_.forEach(function () {
                this.clear();
            });
        }
    };

    module.exports = new State({});
});
