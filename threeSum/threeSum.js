/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted = nums.sort()
    let solution = []

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > 0) {
            break
        }

        if (sorted[i] === sorted[i - 1]) {
            continue
        }

        solution = [...solution, ...iterateGivenFirstNum(sorted[i], sorted.slice(i + 1))]
    }

    return solution
};

function iterateGivenFirstNum(firstNum, remaining) {
    const seen = {}
    const results = []

    for (let i = 0; i < remaining.length; i++) {
        const seeking = 0 - firstNum - remaining[i]

        if (seen.hasOwnProperty(seeking)) {
            results.push([firstNum, seeking, remaining[i]])

            // once we push a solution, if the next number in the sorted array is the same
            // as the current number, we want to disregard that number to avoid dups
            while (remaining[i] === remaining[i + 1]) {
                i++
            }
        }

        seen[remaining[i]] = true
    }

    return results
}


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(threeSum([1, 1, -2]), 'and the answer is [-2, 1, 1]')
console.log(threeSum([-1, 0, 1, 2, -1, -4]), 'and the answer is [[-1, 0, 1],[-1, -1, 2]]')
console.log(threeSum([0, 0, 0, 0]), 'and the answer is [[0, 0, 0]]')
console.log(threeSum([0, 0, 0, 0, 0, 0, 0]), 'and the answer is [[0, 0, 0]]')
console.log(threeSum([-1, -1, -1, 0, 0, 0, 1, 1, 1]), 'and the answer is [[0, 0, 0], [-1, 0, 1]]')
