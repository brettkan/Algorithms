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
    const partitionSum = nums.reduce((sum, num) => {
        return sum + num
    }) / k
    
    // if sum is not divisble by k, return false
    if (!Number.isInteger(partitionSum)) {
        return false
    }

    function findSums(subsetSums = []) {
        if (!nums.length) {
            return true
        }

        const currentNum = nums.pop()
        for (let i = 0; i < k; i++) {
            subsetSums[i] = subsetSums[i] || 0

            if (subsetSums[i] + currentNum <= partitionSum) {
                subsetSums[i] += currentNum
                if (findSums(subsetSums)) {
                    return true
                }
                subsetSums[i] -= currentNum
            }

            if (subsetSums[i] === 0) {
                break
            }

        }
        nums.push(currentNum)

        return false
    }

    // Otherwise, try to find solutions
    const sortedArr = nums.sort()
    return findSums()
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
console.log(canPartitionKSubsets([2,2,2,2,3,4,5], 4), 'should be false')
console.log(canPartitionKSubsets([15,3557,42,3496,5,81,34,95,9,81,42,106,71], 11), 'should be false')

