/**
 * Bootstrap logic for our app
 */
define('app', ['deps/h', 'deps/diff','deps/patch','deps/create', 'page-registry', 'functions/debounce'], function (require, module, exports, h, diff, patch, create, pageRegistry, debounce) {
    "use strict";

    var finished = false;
    var tree, rootNode;
    var container;

    function render() {
        return pageRegistry.render('homepage');
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
            // to seamless auto update: require("functions/tick")(updatePage);
        }
    }

    function load () {
        container = document.querySelector('.page');
        try {
            renderPage();
        } catch(e) {
            console.log(e);
            throw e;
        }
    }

    var update = debounce(function update() {
        updatePage();
    }, 15);

    module.exports = {
        leave: function () {
            finished = true; // hook to stop rerendering the page on demand
        },
        update: update
    };

    load();
    //document.addEventListener("DOMContentLoaded", load);
});
