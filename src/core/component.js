/**
 * Component Registry logic
 */
define('component', ['deps/h'], function (require, module , exports, h) {
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
                } else {
                    return component;
                }
            });
        },
        render: function () {
            return h(this.tagName,{
                className: this.classNames,
                attributes: {
                    'data-title': this.class
                }
            }, this.renderContents());
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
