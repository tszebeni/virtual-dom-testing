/**
 * Example component to render a debug switcher
 */
define('debug-component', ['virtual-dom/h', 'i18n', 'request'], function (require, module, exports, h, i18n, request) {
    'use strict';

    var toggle = 'false';

    function buildHref () {
        var params = JSON.parse(JSON.stringify(request.params));
        toggle = params.debug = params.debug === 'true'?'false':'true';
        return '?' + request.paramEncode(params);
    }

    var debugComponent = function debugComponent() {

        return h('div', {
                className: 'component debug-component',
                attributes: {
                    'data-title': 'DebugComponent'
                }
            }, [
                h('a', {
                    href: buildHref()
                }, [i18n('debug.toggle', i18n('debug.toggle-on-' + toggle))])
            ]);
    };

    module.exports = debugComponent;
});
