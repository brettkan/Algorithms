/* 

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var max = nums[0];
  var lowIndex = 0;
  var highIndex = 0;

  var arrProduct = function(aggregator, number) {
    return aggregator *= number;
  };

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j <= nums.length; j++) {
      var current = nums.slice(i, j).reduce(arrProduct, 1);
      if (current > max) {
        max = current;
        lowIndex = i;
        highIndex = j;
      }
    }
  }

  return nums.slice(lowIndex, highIndex);
};
