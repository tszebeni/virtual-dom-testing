describe('i18n-test.js', function () {
    var i18n = require('i18n');
    var messageSource = require('message-source');

    beforeEach(function () {
        messageSource.add('en', 'test.key', 'Test key value');
        messageSource.add('en', 'test.key1', 'Test key value {0}');
    });

    it('should be a function', function () {
        expect(typeof i18n === 'function').toBeTruthy();
    });

    it('should translate message key', function () {
        expect(i18n('test.key')).toEqual('Test key value');
        expect(i18n('test.key1', 123)).toEqual('Test key value 123');
        expect(i18n('test.key1', 123, 345)).toEqual('Test key value 123');
    });
});
