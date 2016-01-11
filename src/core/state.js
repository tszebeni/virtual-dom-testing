/**
 * State manager
 */
define('state', ['request', 'format'], function (require, module, exports, request, format) {

    var url = 'states/{0}.json'; // parameter: key attribute

    var State = function State(key) {
        this.key = key;
        this.states_ = {};
        this.data = {};
        this.promise = this.fetch();
        var state = this;
        this.promise.then(function (result) {
            var json = JSON.parse(result);
            Object.keys(json).forEach(function (key) {
                state.data[key] = json[key];
            });
        });
        Object.observe(this.data,function (){
            var app = require('app');
            try {
                app.update();
            } catch (e){
            }
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
