/**
 * Bootstrap logic for our app
 */
define('app', ['deps/h', 'deps/diff','deps/patch','deps/create', 'component-registry', 'state'], function (require, module, exports, h, diff, patch, create, componentRegistry, State) {
    "use strict";
    var container = document.querySelector('.page');
    var finished = false;
    var tree, rootNode;
    var state = new State('root');

    function render() {
        return componentRegistry.render('homepage', state);
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
            //tick(updatePage);
        }
    }

    function tick(cb) {
        (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
            window.setTimeout( callback, 1000 / 60 );
        }) (cb);
    }

    var update = function update() {
        try {
            updatePage();
        } catch(e) {
            console.log(e);
        }
    };

    try {
        renderPage();
    } catch(e) {
        console.log(e);
        throw e;
    }

    exports.leave = function () {
        finished = true; // hook to stop rerendering the page on demand
    };
    exports.update = update;

});
