/**
 * Example component to render a profile block
 */
define('todo-component', ['virtual-dom/h'], function (require, module, exports, h) {
    'use strict';

    function todoComponent(state) {
        var todoFilterComponent = require('todo-filter-component');
        var todoListComponent = require('todo-list-component');
        var todoNewComponent = require('todo-new-component');
        return h('div',{
            className: 'component todo-component',
            attributes: {
                'data-title': 'TodoComponent'
            }
        }, [
            h('div', [
                todoFilterComponent(state),
                todoListComponent(state),
                todoNewComponent(state)
            ])
        ]);
    }

    module.exports = todoComponent;
});
