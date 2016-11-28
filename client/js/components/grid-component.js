/**
 * Example component to render a grid block
 */
define('grid-component', ['deps/h', 'component'], function (require, module, exports, h, Component) {
    'use strict';

    var ColComponent = Component.create('col-component', {});

    var GridComponent = Component.create('grid-component', {
        slots: [
            {'class': 'col-5', contents: []},
            {'class': 'col-7', contents: []}
        ],
        class: 'row',
        init: function () {
            this.contents = this.options.slots.map(function (col) {
                return new ColComponent({
                    class: col.class,
                    contents: col.contents
                });
            });
        }
    });

    module.exports = GridComponent;
});
