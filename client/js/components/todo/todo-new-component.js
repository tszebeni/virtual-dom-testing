/**
 * Example component to render a todo new block
 */
define('todo-new-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    'use strict';

    function todoNewComponent(state) {
        return h('div',{
            className: 'component todo-new-component',
            attributes: {
                'data-title': 'TodoNewComponent'
            }
        }, [
            h('div', [
                h('input',{
                    'type': 'text',
                    'placeholder': i18n('todo.new.placeholder'),
                    onchange: function (event) {
                        var newTodo = event.target.value;
                        if (newTodo.trim) {
                            newTodo = newTodo.trim();
                        }
                        if (newTodo.length) {
                            state.todos.push({
                                label: newTodo,
                                completed: false,
                                visible: false
                            });
                            event.target.value = '';
                            state.notify('item-change');
                        }
                    }
                })
            ])
        ]);
    }

    module.exports = todoNewComponent;
});
