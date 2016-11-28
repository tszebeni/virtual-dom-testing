/**
 * Example component to render a homepage
 */
define('homepage', ['component', 'page-registry'], function (require, module, exports, Component, pageRegistry) {
    'use strict';

    var HeaderComponent = require('header-component');
    var MainComponent = require('main-component');
    var FooterComponent = require('footer-component');

    var Homepage = Component.create('homepage', {
        contents: [
            new HeaderComponent(),
            new MainComponent(),
            new FooterComponent()
        ]
    });

    pageRegistry.register(Homepage);

    module.exports = Homepage;
});

