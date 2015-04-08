var assert  = require('assert');
var findInt = require('../src/findInt');

describe('findInt', function() {
  it('should return the index for a single element array', function() {
    var result = findInt([1], 1);
    assert.equal(result, 0);
  })
  it('should return the index for multiple elements', function() {
    var result = findInt([1,2,3,4,5], 4);
    assert.equal(result, 3);
  })
  it('should return -1 if integer is not in the array', function() {
    var result = findInt([1,2,3,4,5], 6);
    assert.equal(result, -1);
  })
})
