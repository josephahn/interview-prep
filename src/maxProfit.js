/*
  Say you have an array for which the ith 
  element is the price of a given stock on 
  day i. If you were only permitted to buy 
  one share of the stock and sell one share 
  of the stock, design an algorithm to find 
  the best times to buy and sell.
*/

var maxProfit = module.exports = function(arr) {
  var buy = null;
  var sell = null;
  var max = null;
  var curr;

  for (var i = 0; i < arr.length; i++) {
    curr = arr[i];
    if (buy === null || curr < buy) {
      buy = curr;
    }
    if (max === null || max < curr - buy) {
      max = curr - buy;
      sell = curr;
    }
  }

  return {
    'buy': sell - max, // necessary because buy updates anytime there is a lesser element
    'sell': sell,
    'max': max
  };
};
