/**
 * Timer
 */
define('timer', ['state'], function (require, module, exports, State) {

    var Timer = function Timer(name, startFrom) {
        this.state = new State(name);
        if (!startFrom) {
            this.state.fetch();
        } else {
            this.set(startFrom);
        }
    };

    Timer.prototype.get = function () {
        return this.state.data.time;
    };

    Timer.prototype.set = function (time) {
        return this.state.data.time = time;
    };

    Timer.prototype.decrement = function () {
        return this.state.data.time--;
    };

    Timer.prototype.start = function () {
        if (!this.timer) {
            this.timer = setInterval(function () {
                if (this.get() === 0) {
                    clearInterval(this.timer);
                    this.timer = null;
                    return;
                }
                this.decrement();
            }.bind(this), 1000);
        }
        return this;
    };

    module.exports = Timer;
});
