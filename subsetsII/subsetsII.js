/*

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const sorted = nums.sort()
    return [[], ...backtrack(nums, 0, [])]
};

function backtrack(nums, index, current) {
    const solutions = []

    for (let i = index; i < nums.length; i++) {
        if (i !== index && nums[i] === nums[i - 1]) {
            continue
        }

        current.push(nums[i])
        solutions.push([...current], ...backtrack(nums, i + 1, current))
        current.pop()
    }

    return solutions
}


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(subsetsWithDup([1, 2, 3]))
console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([1, 1, 1, 2, 2, 2]))
