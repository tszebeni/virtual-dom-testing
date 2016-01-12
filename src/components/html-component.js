/**
 * Example component to render a text block
 */
define('html-component', ['virtual-dom/h', 'i18n', 'component', 'html2hscript'], function (require, module, exports, h, i18n, Component, html2hscript) {
    "use strict";

    var HTMLComponent = Component.create('html-component', {
        init: function () {
            this.options.xss = this.options.xss || {
                    whiteList: {
                        div:[],span: [],strong:[],
                        b: [],i: [],
                        h1: [], h2:[],h3:[],h4:[],h5:[]
                    },
                    stripIgnoreTag:     true,
                    stripIgnoreTagBody: ['script']
                };
            this.html = this.options.html || '';
            this.safe = this.options.safe || false;
            html2hscript.convert(this.sanitize(this.html), function (err, hscript) {
                if (!err) {
                    this.html = hscript;
                    try {
                        require('app').update();
                    }catch (e) {}
                }
            }.bind(this));
        },
        sanitize: function (html) {
            if (!this.safe) {
                return html2hscript.xss(html, this.options.xss);
            }
            return html;
        },
        renderContents: function () {
            return eval(this.html);
        }
    });

    module.exports = HTMLComponent;
});
