/* 
  Given  a  sorted  array  of  integers,  how  can  you  
  find  the  location  of  a  particular  integer  x? 
*/

var findInt = module.exports = function(arr, x, l, r) {
  l = l || 0;
  r = r || arr.length - 1;
  // NOTE: be careful not to set mid calculation to (r-1)/2
  var mid = r - Math.floor((r-l)/2);
  if (arr[mid] === x) {
    return mid;
  } else if (arr[mid] < x && r-l > -1) {
    return findInt(arr, x, mid+1, r);
  } else if (arr[mid] > x && r-l > -1) {
    return findInt(arr, x, l, mid-1);
  } else {
    return -1;
  }
};

// NOTE: also can be done iteratively
