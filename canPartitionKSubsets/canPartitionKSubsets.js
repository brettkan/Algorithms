/*

Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:
Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Note:

1 <= k <= len(nums) <= 16.
0 < nums[i] < 10000.

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4), 'should be true')
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 5), 'should be false')
console.log(canPartitionKSubsets([7, 1, 1, 1, 1, 1, 1, 1], 2), 'should be true')
