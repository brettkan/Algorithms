/*

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const solutions = [[]]
    const current = []

    function generate(index) {
        for (index; index < nums.length; index++) {
            current.push(nums[index])
            solutions.push([...current])
            generate(index + 1)
            current.pop()
        }
    }

    generate(0)

    return solutions
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(subsets([1, 2, 3]))
