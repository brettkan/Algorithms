/*

There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one
by one in N days. In each day, there will be exactly one flower blooming and it will be in the
status of blooming since then.

Given an array flowers consists of number from 1 to N. Each number in the array represents the
place where the flower will open in that day.

For example, flowers[i] = x means that the unique flower that blooms at day i will be at position
x, where i and x will be in the range from 1 to N.

Also given an integer k, you need to output in which day there exists two flowers in the status
of blooming, and also the number of flowers between them is k and these flowers are not blooming.

If there isn't such day, output -1.


Example 1:
Input: 
flowers: [1,3,2]
k: 1
Output: 2
Explanation: In the second day, the first and the third flower have become blooming.


Example 2:
Input: 
flowers: [1,2,3]
k: 1
Output: -1


Note:
The given array will be in the range [1, 20000].

*/


/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function(flowers, k) {
    const days = getDays(flowers)
    let left = 0
    let right
    let ans = Infinity

    while (left < days.length - 1 - k) {
        right = left + k + 1
        let isValidInterval = true

        for (let i = left + 1; i < right; i++) {
            if (days[i] < days[left] || days[i] < days[right]) {
                left = i
                isValidInterval = false
                break
            }
        }

        if (isValidInterval) {
            const dayValid = Math.max(days[left], days[right])
            ans = Math.min(dayValid, ans)
            left = right
        }
    }

    return ans === Infinity ? -1 : ans
}

function getDays(flowers) {
    const days = []
    for (let i = 0; i < flowers.length; i++) {
        days[flowers[i] - 1] = i + 1
    }

    return days
}

/**
 * BRUTE FORCE APPROACH
 **
var kEmptySlots = function(flowers, k) {
    for (let i = 0; i < flowers.length; i++) {
        const currentFlowerPos = flowers[i]
        let foundLower = false
        let foundLowerBlocker = false
        let foundHigher = false
        let foundHigherBlocker = false

        for (let j = 0; j < i; j++) {
            const prevFlowerPos = flowers[j]
            const distance = Math.abs(currentFlowerPos - prevFlowerPos)

            if (distance <= k) {
                if (prevFlowerPos > currentFlowerPos) {
                    foundHigherBlocker = true
                } else {
                    foundLowerBlocker = true
                }
            } else if (distance === k + 1) {
                if (prevFlowerPos > currentFlowerPos) {
                    foundHigher = true
                } else {
                    foundLower = true
                }
            }
        }

        if ((foundHigher && !foundHigherBlocker) || (foundLower && !foundLowerBlocker)) {
            return i + 1
        }
    }

    return -1
};

*/

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(kEmptySlots([3,9,2,8,1,6,10,5,4,7], 1), 'and output should be 6')
console.log(kEmptySlots([6,5,8,9,7,1,10,2,3,4], 2), 'and output should be 8')
console.log(kEmptySlots([1,3,2], 1), 'and output should be 2')
console.log(kEmptySlots([1,2,3], 1), 'and output should be -1')





