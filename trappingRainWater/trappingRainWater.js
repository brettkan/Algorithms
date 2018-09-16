/*

Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units
of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeft = height[0]
    let maxRight = height[height.length - 1]

    let leftIndex = 0
    let rightIndex = height.length - 1

    let totalVol = 0

    while (leftIndex < rightIndex) {
        let currentIndex
        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++
            maxLeft = Math.max(maxLeft, height[leftIndex])
            currentIndex = leftIndex
        } else {
            rightIndex--
            maxRight = Math.max(maxRight, height[rightIndex])
            currentIndex = rightIndex
        }

        let surroundingMin = Math.min(maxLeft, maxRight)
        totalVol += Math.max(surroundingMin, height[currentIndex]) - height[currentIndex]
    }

    return totalVol
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(trap([2, 0, 2]), 'and the answer is 2')
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 'and the answer is 6')
