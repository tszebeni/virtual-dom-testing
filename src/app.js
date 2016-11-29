/**
 * Bootstrap logic for our app
 */
define('app', ['virtual-dom/h', 'virtual-dom/diff','virtual-dom/patch','virtual-dom/create', 'component-registry', 'state'], function (require, module, exports, h, diff, patch, create, componentRegistry, state) {
    'use strict';
    var container = document.querySelector('.page');
    var finished = false;
    var tree, rootNode;

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
            tick(updatePage);
        }
    }

    function tick(cb) {
        (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback ) {
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
