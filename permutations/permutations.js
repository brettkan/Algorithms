/*

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function backtrack(remaining, current = [], solutions = []) {
        if (remaining.length === 0) {
            solutions.push([...current])
            return
        }

        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i])
            let nextRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)]
            backtrack(nextRemaining, current, solutions)
            current.pop()
        }

        return solutions
    }

    return backtrack(nums)
};

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(permute([1,2,3]))



