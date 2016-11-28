/**
 * Example component to render a custom html component with xss protection
 */
define('html-component', ['deps/h', 'i18n', 'functions/merge','component', 'deps/hscript', 'deps/xss'], function (require, module, exports, h, i18n, merge, Component, html2hscript, xss) {
    'use strict';

    var defaults = {
        xss: {
            whiteList: {
                div:['title'],span: ['title'],strong:['title'],
                b: ['title'],i: ['title'],
                h1: ['title'], h2:['title'],h3:['title'],h4:['title'],h5:['title']
            },
            stripIgnoreTag: true,
            stripIgnoreTagBody: ['script']
        },
        safe: false
    };

    var HTMLComponent = Component.create('html-component', {
        init: function () {
            this.options = merge({}, defaults, this.options);
            html2hscript(this.sanitize(this.options.html), function (err, hscript) {
                if (!err) {
                    this.hscript = hscript;
                    try {
                        require('app').update();
                    }catch (e) {
                        return;
                    }
                }
            }.bind(this));
        },
        sanitize: function (html) {
            if (!this.options.safe) {
                return xss(html, this.options.xss);
            }
            return html;
        },
        renderContents: function () {
            /*eslint no-eval: 0*/
            return eval(this.hscript);
        }
    });

    module.exports = HTMLComponent;
});
