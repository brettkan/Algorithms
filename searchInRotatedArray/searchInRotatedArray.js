/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).


Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4


Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const offset = getRotationPivot(nums)

    let low
    let high
    let mid

    if (offset === 0) {
        low = 0
        high = nums.length - 1
    } else {
        low = target >= nums[0] ? 0 : offset
        high = target >= nums[0] ? offset - 1 : nums.length - 1
    }

    while (low <= high) {
        mid = Math.floor((low + high) / 2)

        if (nums[mid] > target) {
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            return mid
        }
    }

    return -1
};

function getRotationPivot(arr) {
    let low = 0
    let high = arr.length - 1
    let mid

    if (arr[0] <= arr[arr.length - 1]) {
        return 0
    }

    while (low <= high) {
        mid = Math.floor((low + high) / 2)

        if (arr[mid] > arr[mid + 1]) {
            return mid + 1
        } else if (arr[mid] > arr[high]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
        
    return 0
}

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(getRotationPivot([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]))
console.log(search([5, 1, 3], 3), 'and output should be 2')
console.log(search([1, 3], 3), 'and output should be 1')
console.log(search([4,5,6,7,0,1,2], 0), 'and output should be 4')
console.log(search([4,5,6,7,0,1,2], 3), 'and output should be -1')
console.log(search([4,5,6,7,8,1,2,3], 8), 'and output should be 4')
console.log(search([1], 0), 'and output should be -1')
console.log(search([1], 1), 'and output should be 0')





