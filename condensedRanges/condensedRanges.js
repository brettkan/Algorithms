/* 

Write a function condensedRanges that takes an array of 
ranges and returns an array of condensed ranges.

Example: 

var ranges =   [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
condensedRanges(ranges);


Should return:

[[0, 1], [3, 8], [9, 12]]

*/

var condensedRanges = function(ranges) {
  var sortedRanges = ranges.slice().sort(function(a, b) {
    return a[0] - b[0];
  });

  var condensed = [];
  var prev = sortedRanges[0].slice();

  for (var i = 1; i < sortedRanges.length; i++) {
    var current = sortedRanges[i];
    if (prev[1] >= current[0]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      condensed.push(prev);
      prev = current;
    }
  }

  condensed.push(prev);

  return condensed;
};
