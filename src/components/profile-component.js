/**
 * Example component to render a profile block
 */
define('profile-component', ['virtual-dom/h', 'i18n'], function (require, module, exports, h, i18n) {
    "use strict";

    function profileComponent(state) {
        return h('div',{
            className: 'component profile-component',
            attributes: {
                'data-title': 'ProfileComponent'
            }
        }, [
            h('div', [
                h('img',{
                    attributes: {
                        'src': state.avatarUrl,
                        'alt': state.username
                    }
                }, []),
                h('div', [
                    i18n('profile.username', state.username),
                    h('a', {
                        attributes: {
                            'href': state.tag && state.tag.url
                        }
                    }, [
                        state.tag && state.tag.label
                    ])
                ])
            ])
        ]);
    }

    module.exports = profileComponent;
});
