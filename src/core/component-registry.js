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

    var headerComponent;
    var mainComponent;
    var component;
    var grid;
    var footerComponent;

    function init() {
        headerComponent = new (require('header-component'));
        mainComponent = new (require('main-component'));
        component = new (require('component'));
        grid = new (require('grid-component'));
        footerComponent = new (require('footer-component'));
    }



    var components = {
        "homepage": function (state) {
            return container([headerComponent.render(), mainComponent.render(), component.render(),grid.render(), footerComponent.render()]);
        }
    };

    module.exports = {
        render: function (component, state) {
            init();
            init = function () {};
            assert(component && components[component], 'Failed to load component: ' + component);
            return components[component](state);
        }
    };
});
