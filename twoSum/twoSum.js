/* 

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, 
where index1 must be less than index2. Please note that your returned answers (both index1 and index2) 
are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

*/

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var temp = target - nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] === temp) {
        return [i, j];
      }
    }
  }

  return null;
};

function twoSumHash(nums, target) {
    const hash = nums.reduce((aggregate, num, index) => {
        aggregate[num] = index
        return aggregate
    }, {})

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (hash.hasOwnProperty(diff) && i !== hash[diff]) {
            return [i, hash[diff]]
        }
    }

    return null
}