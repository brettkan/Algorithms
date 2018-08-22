/*

Given a non-negative integer num represented as a string, remove k digits from the number so that the new
number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

*/


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let numValidZeroes = 0;
    let numToRemove = 0;
    let lastZeroIndex = -1;
    let index = 0

    // If there are <= k non-zero digits on the left of a zero, remove those first
    while (index < k + numValidZeroes + 1) {
        if (num[index] === '0') {
            numValidZeroes++
            numToRemove += index - lastZeroIndex - 1
            lastZeroIndex = index
        }
        index++
    }

    // Get new number and k after removing digits left of zero
    if (numValidZeroes > 0) {
        num = num.slice(numValidZeroes + numToRemove)
        k -= numToRemove
    }

    // Look at first k+1 digits, and remove "k" number of highest digits
    const highestLeftArray = num.slice(0, k + 1).split('').sort().reverse()
    // Remove smallest digit - this one will remain
    highestLeftArray.pop()

    // Remove highest digits from num
    while (highestLeftArray.length > 0) {
        let digitToRemove = highestLeftArray.shift()
        let indexToRemove = num.indexOf(digitToRemove)
        num = num.slice(0, indexToRemove) + num.slice(indexToRemove + 1)
    }

    return num || '0'
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(removeKdigits('1432219', 3), 'and expected: 1219')
console.log(removeKdigits('2403012', 1), 'and expected: 203012')
console.log(removeKdigits('2403012', 2), 'and expected: 3012')
console.log(removeKdigits('2403012', 3), 'and expected: 12')
console.log(removeKdigits('2403012', 4), 'and expected: 1')
console.log(removeKdigits('10200', 1), 'and expected: 200')
console.log(removeKdigits('10200', 2), 'and expected: 0')
console.log(removeKdigits('10', 2), 'and expected: 0')
