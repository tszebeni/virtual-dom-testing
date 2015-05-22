define('app', ['virtual-dom/h','virtual-dom/diff','virtual-dom/patch','virtual-dom/create', 'header-component'], function (require, module, exports, h, diff, patch, create, headerComponent) {
    "use strict";
    var container = document.querySelector('.page');
    container.innerHTML = 'Hello World!';

    function render(count)  {
        return h('div', [headerComponent(count)]);
    }

    var count = 0;

    var tree = render(count);
    var rootNode = create(tree);
    container.appendChild(rootNode);

    setInterval(function () {
          count++;

          var newTree = render(count);
          var patches = diff(tree, newTree);
          rootNode = patch(rootNode, patches);
          tree = newTree;
    }, 1000);

});

