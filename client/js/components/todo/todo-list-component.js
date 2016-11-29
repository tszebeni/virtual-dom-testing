/**
 * Example component to render a todo list block
 */
define('todo-list-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    'use strict';

    function cond(obj, prop, conditional, value) {
        if (conditional) {
            obj[prop] = value;
        }
        return obj;
    }

    function filter(list, prop, value) {
        return list.filter(function (item) {
            return item[prop] === value;
        });
    }

    function todoStatComponent(state) {
        return h('div', {
            className: 'component todo-stat-component',
            attributes: {
                'data-title': 'TodoStatComponent'
            }
        }, [
            state.todos && (i18n('todo.completed') + filter(filter(state.todos, 'visible', true), 'completed', true).length),
            h('br'),
            state.todos && (i18n('todo.not_completed') + filter(filter(state.todos, 'visible', true), 'completed', false).length),
            h('br'),
            state.todos && (i18n('todo.hidden') + filter(state.todos, 'visible', false).length)
        ]);
    }

    function todoItemComponent(state) {
        return function (item, index) {
            if (!item.visible) {
                return null;
            }
            return h('div', {
                className: 'component todo-item-component',
                attributes: {
                    'data-title': 'TodoItemComponent'
                }
            }, [
                h('input', cond({
                    className: 'todo-item-component-checkbox',
                    id: 'todo-item-' + index,
                    title: i18n('todo.is_completed'),
                    onclick: function () {
                        console.log('1');
                        item.completed = !item.completed;
                        state.notify('item-change');
                    },
                    type: 'checkbox'
                }, 'checked', !!item.completed, 'checked')),
                h('label', {
                    className: 'todo-item-component-label',
                    attributes: {
                        for: 'todo-item-' + index
                    }
                }, [
                    item.label
                ]),
                h('button', {
                    'title': i18n('todo.remove_this'),
                    onclick: function () {
                        delete state.todos[index];
                        state.notify('item-change');
                    }
                },[
                    'x'
                ])
            ]);
        };
    }

    function todoListComponent(state) {
        return h('div',{
            className: 'component todo-list-component',
            attributes: {
                'data-title': 'TodoListComponent'
            }
        }, [
            i18n('todo.list'),
            state.todos && state.todos.map(todoItemComponent(state)),
            todoStatComponent(state)
        ]);
    }

    module.exports = todoListComponent;
});
