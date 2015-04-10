var assert    = require('assert');
var maxProfit = require('../src/maxProfit');

describe('maxProfit', function() {
  it('should work!', function() {
    var result = maxProfit([5,10,2,3,15,21,7,1]);
    assert.deepEqual(result, {'buy':2,'sell':21,'max':19});
  })
  it('should work again!', function() {
    var result = maxProfit([2,1,6,4,5,3]);
    assert.deepEqual(result, {'buy':1,'sell':6,'max':5});
  })
  it('should work here?', function() {
    var result = maxProfit([4,3,2,1]);
    assert.deepEqual(result, {'buy':4,'sell':4,'max':0});
  })
})
