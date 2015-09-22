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


    var components = {
        "homepage": function (state) {
            var headerComponent = require('header-component')(state.header || (state.header = {}));
            var mainComponent = require('main-component')(state.main || (state.main = {}));
            var footerComponent = require('footer-component')(state.footer || (state.footer = {}));

            return container([headerComponent, mainComponent, footerComponent]);
        }
    };

    module.exports = {
        render: function (component, state) {
            assert(component && components[component], 'Failed to load component: ' + component);
            return components[component](state);
        }
    };
});
