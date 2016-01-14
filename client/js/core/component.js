/**
 * Component Registry logic
 */
define('component', ['deps/h', 'functions/merge'], function (require, module , exports, h, merge) {
    "use strict";

    var Component = function Component(options) {
        options = options || {};
        this.options = options;
        this.class = this.class || options.class || 'generic-component';
        this.tagName = this.tagName || options.tagName || 'div';
        this.contents = this.contents || options.contents || [''];
        this.classNames = "component " + this.class;
    };

    Component.prototype = {
        renderContents: function () {
            return this.contents.map(function (component) {
                if (!!component.render) {
                    return component.render();
                } else if (typeof component === 'function') {
                    return component.call(this);
                }else {
                    return component;
                }
            }.bind(this));
        },
        render: function () {
            var options = {
                className: this.classNames,
                attributes: {
                    'data-title': this.class
                }
            };
            merge(options, this.events, this.options.events);
            return h(this.tagName, options, this.renderContents());
        }
    };

    Component.create = function (claz, proto) {
        var Child = function () {
            Component.apply(this, arguments);
            this.class = claz;
            this.init && this.init();
        };
        Child.prototype = Object.create(Component.prototype);
        Child.prototype.constructor = Child;
        Child.class = claz;
        Object.keys(proto).forEach(function (key) {
            Child.prototype[key] = proto[key];
        });
        return Child;
    };

    module.exports = Component;
});
