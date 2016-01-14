(function (global) {
    "use strict";
    var mockTranslations = {
        'test.key': 'Test key value',
        'test.key1': 'Test key value {0}'
    };
    var defaultLocale = 'en';
    global.defaultTranslations = {};
    global.defaultLocale = defaultLocale;
    global.defaultTranslations[defaultLocale] = mockTranslations;
})(this);
