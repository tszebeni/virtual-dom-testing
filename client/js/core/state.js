/**
 * State manager
 */
define('state', ['request', 'format', 'functions/tried'], function (require, module, exports, request, format, tried) {

    var url = 'states/{0}.json'; // parameter: key attribute

    var State = function State(key, shouldFetch) {
        this.key = key;
        this.states_ = {};
        this.data = {};
        Object.observe(this.data, tried(function (){
            require('app').update();
        }));
        if (shouldFetch) {
            this.fetch();
        }
    };

    State.prototype = {
        request: function () {
            if (this.key) {
                return request(format(url, this.key));
            } else {
                return Promise.resolve('{}');
            }
        },
        fetch: function () {
            this.promise = this.request();
            this.promise.then(function (result) {
                var json = JSON.parse(result);
                Object.keys(json).forEach(function (key) {
                    this.data[key] = json[key];
                }.bind(this));
            }.bind(this));
        },
        create: function (key) {
            if (!this.states_[key]) {
                this.states_[key] = new State(key);
            }
            return this.states_[key];
        },
        clear: function () {
            this.data = {};
            this.states_.forEach(function () {
                this.clear();
            });
        }
    };

    module.exports = State;
});
