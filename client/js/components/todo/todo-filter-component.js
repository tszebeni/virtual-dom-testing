/**
 * Example component to render a todo filter block
 */
define('todo-filter-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    'use strict';

    function cond(obj, prop, conditional) {
        if (conditional) {
            obj[prop] = conditional;
        }
        return obj;
    }

    function filter(list, prop, value) {
        return list.filter(function (item) {
            return item[prop] === value;
        });
    }

    function onChange(prop, value) {
        return function (event, state) {
            if (event == 'filter-change') {
                state['filter-' + prop + '-' + value] = !state['filter-' + prop + '-' + value];
            }
            state.todos.map(function (item) {
                if (item[prop] === value) {
                    item.visible = state['filter-' + prop + '-' + value];
                }
            });
        };
    }

    function filterCheckboxComponent(state, prop, value) {
        var onChange_ = onChange(prop, value);
        state.listener('item-change', 'filterCheckboxComponent-' + prop + '-' + value, onChange_);
        return h('div', [
            h('input', cond({
                className: 'todo-filter-component-checkbox',
                id: 'todo-filter-' + prop + value,
                onclick: function () {
                    onChange_('filter-change', state);
                },
                type: 'checkbox'
            }, 'checked', !!state['filter-' + prop + '-' + value])),
            h('label', {
                className: 'todo-item-component-label',
                attributes: {
                    for: 'todo-filter-' + prop + value
                }
            }, [
                i18n('todo.prop.' + prop + '.' + value)
            ])
        ]);
    }

    function todoFilterComponent(state) {
        return h('div',{
            className: 'component todo-filter-component',
            attributes: {
                'data-title': 'TodoFilterComponent'
            }
        }, [
            i18n('todo.filter'),
            state.todos && filterCheckboxComponent(state, 'completed', true),
            state.todos && filterCheckboxComponent(state, 'completed', false)
        ]);
    }

    module.exports = todoFilterComponent;
});
