/**
 * Page component registry logic
 */
define('page-registry', ['deps/h'], function (require, module , exports, h) {
    "use strict";

    var components = {};
    var instances = {};

    function container(elements) {
        var request = require('request');
        return h('article', {
            className: request.params.debug === 'true'? 'debug':''
        }, elements);
    }

    module.exports = {
        build: function (component) {
            require(component);
            assert(component && components[component], 'Failed to load component: ' + component);
            return components[component];
        },
        render: function (component) {
            if (!instances[component]) {
                instances[component] = new (this.build(component))();
            }
            return container(instances[component].render());
        },
        register: function (component) {
            components[component.class] = component;
        }
    };
});
