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
    const stack = []
    let totalVol = 0

    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()
            if (!stack.length) {
                break
            }

            const dist = i - stack[stack.length - 1] - 1
            const minHeight = Math.min(height[i], height[stack[stack.length - 1]])
            totalVol += dist * (minHeight - height[prevIndex])
        }

        stack.push(i)
    }

    return totalVol
 }

/**
 * ONE PASS SOLUTION
 **

var trap = function(height) {
    let maxLeft = 0
    let maxRight = 0

    let leftIndex = 0
    let rightIndex = height.length - 1

    let totalVol = 0

    while (leftIndex < rightIndex) {
        if (height[leftIndex] < height[rightIndex]) {
            if (height[leftIndex] > maxLeft) {
                maxLeft = height[leftIndex]
            } else {
                totalVol += maxLeft - height[leftIndex]
            }
            leftIndex++
        } else {
            if (height[rightIndex] > maxRight) {
                maxRight = height[rightIndex]
            } else {
                totalVol += maxRight - height[rightIndex]
            }
            rightIndex--
        }
    }

    return totalVol
};

*/


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(trap([2, 0, 2]), 'and the answer is 2')
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 'and the answer is 6')
