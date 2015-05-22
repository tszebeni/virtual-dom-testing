describe("assert-test.js", function() {
    it("contains an assert on global namespace", function() {
        expect(assert).toBeDefined();
    });

    it('should be fine if the first parameter is truthy', function () {
        expect(function () {
            assert(true, 'Assertion Error');
        }).not.toThrowError();
    });

    it('throws error if first parameter is falsy', function () {
        expect(function () {
            assert(false, 'Assertion Error');
        }).toThrowError(Error, 'Assertion Error');
    });

    it('throws error if first parameter is falsy and with default Error message if omitted', function () {
        expect(function () {
            assert(false);
        }).toThrowError(Error, 'Assertion Error');
    });

});
