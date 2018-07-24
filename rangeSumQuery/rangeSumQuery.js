/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/


/**
 * CACHING SOLUTION
 **/

/**
 * @param {number[]} nums
 */
function NumArray(nums) {
    this.rangeCache = new Map()

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            this.rangeCache.set(`${i}, ${j}`, sum)
        }
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.rangeCache.get(`${i}, ${j}`)
};


/**
 * BRUTE FORCE SOLUTION
 **
function NumArray(nums) {
    this.nums = nums
}

NumArray.prototype.sumRange = function(i, j) {
    let sum = 0
    for (let index = i; index <= j; index++) {
        sum += this.nums[index]
    }
    return sum
};
*/


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */


/**
 * TEST CASES
 **/

const sumArr = new NumArray([-2,0,3,-5,2,-1])
console.log(sumArr.sumRange(0, 2))
console.log(sumArr.sumRange(2, 5))
console.log(sumArr.sumRange(0, 5))

