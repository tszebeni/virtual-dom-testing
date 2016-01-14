describe('leave-test.js', function () {
    var leave = require('leave');
    var app = require('app');

    beforeEach(function() {
        spyOn(app, 'leave');
    });

    it('should be a function', function () {
        expect(typeof leave === 'function').toBeTruthy();
    });

    it('should invoke leave on app', function () {
        expect(app.leave).not.toHaveBeenCalled();
        leave();
        expect(app.leave).toHaveBeenCalled();
    });
});
