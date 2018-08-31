/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has
the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer
approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let lastNegativeIndex = -1
    let maxSum = nums[0]
    let latestContiguousSum = 0

    for (let i = 0; i < nums.length; i++) {
        latestContiguousSum += nums[i]
        maxSum = Math.max(maxSum, latestContiguousSum)

        if (latestContiguousSum < 0) {
            latestContiguousSum = 0
        }
    }

    return maxSum
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
