/**
 * Component Registry logic
 */
define('component-registry', ['virtual-dom/h', 'request'], function (require, module , exports, h, request) {
    "use strict";

    function container(elements) {
        var request = require('request');
        return h('article', {
            className: request.params.debug === 'true'? 'debug':''
        }, elements.filter(function (elem) {
            return !!elem
        }));
    }

    function dynamicPage(name, state) {
        var components = [];
        var page = state.get(name);
        if (page['components']) {
            components = page['components'].map(function (component) {
                return require(component.name)(state.get(component.state));
            });
        }
        return container(components);
    }


    var pages = {
    };

    module.exports = {
        render: function (name, state) {
            assert(name, 'No page name was specified.');
            if (!pages[name]) {
                return dynamicPage(name, state);
            }
            return pages[name](state);
        }
    };
});
