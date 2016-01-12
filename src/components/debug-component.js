/**
 * Example component to render a debug switcher
 */
define('debug-component', ['deps/h', 'i18n', 'request', 'component'], function (require, module, exports, h, i18n, request, Component) {
    "use strict";

    var DebugComponent = Component.create('debug-component', {
        init: function () {
            this.toggle = false;
        },
        renderContents: function () {
            return [
                h('a', {
                    href: this.buildHref()
                }, [i18n('debug.toggle', i18n('debug.toggle-on-' + this.toggle))])
            ];
        },
        buildHref: function () {
            var params = JSON.parse(JSON.stringify(request.params));
            this.toggle = params.debug = params.debug === 'true'?'false':'true';
            return '?' + request.paramEncode(params);
        }
    });

    module.exports = DebugComponent;
});
