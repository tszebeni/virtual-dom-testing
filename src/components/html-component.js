/**
 * Example component to render a text block
 */
define('html-component', ['deps/h', 'i18n', 'merge','component', 'deps/hscript', 'deps/xss'], function (require, module, exports, h, i18n, merge, Component, html2hscript, xss) {
    "use strict";

    var defaults = {
        html: '',
        hscript: '',
        safe: false,
        xss: {
            whiteList: {
                div:[],span: [],strong:[],
                b: [],i: [],
                h1: [], h2:[],h3:[],h4:[],h5:[]
            },
            stripIgnoreTag: true,
            stripIgnoreTagBody: ['script']
        }
    };

    var HTMLComponent = Component.create('html-component', {
        init: function () {
            this.options = merge(defaults, this.options);
            html2hscript(this.sanitize(this.options.html), function (err, hscript) {
                if (!err) {
                    this.hscript = hscript;
                    try {
                        require('app').update();
                    }catch (e) {}
                }
            }.bind(this));
        },
        sanitize: function (html) {
            if (!this.safe) {
                return xss(html, this.options.xss);
            }
            return html;
        },
        renderContents: function () {
            return eval(this.hscript);
        }
    });

    module.exports = HTMLComponent;
});
