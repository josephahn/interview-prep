var assert  = require('assert');
var completeCycle = require('../src/completeCycle');

describe('completeCycle', function() {
  it('should return true for a valid circular array', function() {
    var result = completeCycle([1,2,-2,-1]);
    assert.equal(result, true);
  })
  it('should return false', function() {
    var result = completeCycle([1,2]);
    assert.equal(result, false);
  })
  it('should return true', function() {
    var result = completeCycle([1,1,5,1]);
    assert.equal(result, true);
  })
})
