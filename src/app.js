/**
 * Bootstrap logic for our app
 */
define('app', ['virtual-dom/h','virtual-dom/diff','virtual-dom/patch','virtual-dom/create', 'header-component', 'locale-component', 'debug-component', 'request'], function (require, module, exports, h, diff, patch, create, headerComponent, localeComponent, debugComponent ,request) {
    "use strict";
    var container = document.querySelector('.page');
    var finished = false;
    var tree, rootNode;

    function render() {
        return h('article', {
            className: request.params.debug === 'true'? 'debug':'' // indicate that we are in debug mode TODO instead of css make it automatic
        },[headerComponent(), localeComponent(), debugComponent()]); // Top level page components
    }

    function renderPage() {
        tree = render();
        rootNode = create(tree);
        container.appendChild(rootNode);
        updatePage();
    }

    function updatePage() {
        if (!finished) {
            var newTree = render();
            var patches = diff(tree, newTree);
            rootNode = patch(rootNode, patches);
            tree = newTree;
            interval(updatePage);
        }
    }

    function interval(cb) {
        (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
            window.setTimeout( callback, 1000 / 60 );
        }) (cb);
    }

    renderPage();

    exports.leave = function () {
        finished = true; // hook to stop rerendering the page on demand
    };

});

