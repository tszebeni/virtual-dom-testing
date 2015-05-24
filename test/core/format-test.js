describe('format-test.js', function () {
    var format = require('format');

    it('should be function', function () {
        expect(typeof format === 'function').toBeTruthy();
    });

    describe('substitute', function () {
        it('should return the message key if no parameters provided', function () {
            expect(format('test message')).toEqual('test message');
            expect(format('test message {0}')).toEqual('test message {0}');
        });

        it('should substitute parameters when they provided', function () {
            expect(format('test message {0}', 123)).toEqual('test message 123');
            expect(format('test message {0} {1}', 123, 'asd')).toEqual('test message 123 asd');
            expect(format('test message {1} {0}', 123, 'asd')).toEqual('test message asd 123');
            expect(format('test message {1} {0} {1}', 123, 'asd')).toEqual('test message asd 123 asd');
        });
    });

});
