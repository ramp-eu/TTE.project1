const assert = require('assert');
const hello = require('../src/hello');

describe('Array', function () {
    describe('getText()', function () {
        it('should return 0 when the value is present', function () {
            assert.equal(hello.getText().contains('Hello'), -1);
        });
        it('should return -1 when the value is not present', function () {
            assert.equal(hello.getText().contains('Goodbye'), -1);
        });
    });
});
