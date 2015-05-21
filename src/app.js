(function () {
    define('virtual-dom', ['anonymous0'], function (require, module, exports, vd) {

        var assertionMessage = 'It has the virtual dom utility methods';
        assert(vd.h, assertionMessage);
        assert(vd.diff, assertionMessage);
        assert(vd.patch, assertionMessage);
        assert(vd.create, assertionMessage);

        return vd;
    });

    define('app', ['virtual-dom'], function (require, module, exports, vd) {
        var container = document.querySelector('.page');
        container.innerHTML = 'Hello World!';

        var h = vd.h;
        var diff = vd.diff;
        var patch = vd.patch;
        var createElement = vd.create;

        function render(count)  {
            return h('div', {
                style: {
                    textAlign: 'center',
                    lineHeight: (100 + count) + 'px',
                    border: '1px solid red',
                    width: (100 + count) + 'px',
                    height: (100 + count) + 'px'
                }
            }, [String(count)]);
        }

        var count = 0;

        var tree = render(count);
        var rootNode = createElement(tree);
        container.appendChild(rootNode);

        setInterval(function () {
              count++;

              var newTree = render(count);
              var patches = diff(tree, newTree);
              rootNode = patch(rootNode, patches);
              tree = newTree;
        }, 1000);

    });
})();
