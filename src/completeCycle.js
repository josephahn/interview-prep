/*
  Determine if a circular array of relative
  indices is compossed of a single complete
  cycle.
*/

var completeCycle = module.exports = function(arr) {
  var j = 0;
  var diff = 0;
  for (var i = 0; i < arr.length; i++) {
    j = (j + arr[j]) % arr.length;
    diff += i - j;
  }
  return (j === 0 && diff === 0);
};
