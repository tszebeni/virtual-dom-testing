/**
 * Component Registry logic
 */
define('component', ['virtual-dom/h'], function (require, module , exports, h) {
    "use strict";

    var Component = function Component(options) {
        options = options || {};
        this.options = options;
        this.class = this.class || options.class || 'generic-component';
        this.tagName = this.tagName || options.tagName || 'div';
        this.contents_ = this.contents_ || options.contents || [''];
        this.classNames = "component " + this.class;
    };

    Component.prototype = {
        contents: function (contents) {
            if (contents) {
                this.contents_ = contents;
            }
            return this.contents_;
        },
        renderContents: function () {
            return this.contents().map(function (component) {
                if (typeof component === 'string') {
                    return component;
                } else
                    return component.render();
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
        Object.keys(proto).forEach(function (key) {
            Child.prototype[key] = proto[key];
        });
        return Child;
    };

    module.exports = Component;
});
