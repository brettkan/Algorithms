/* 

Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.

*/

var rotateList = function(array, k) {
  var oneCycleNum = k % array.length;
  var numToAdd = oneCycleNum ? array.length - oneCycleNum : 0;
  var result = array.slice();

  for (var i = 0; i < numToAdd; i++) {
    result.push(result[i]);
  }

  return result.slice(numToAdd);
};
