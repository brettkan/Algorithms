/*

Given a string S and a string T, find the minimum window in S which will contain all the characters
in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window
in S.

*/


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const targetDict = t.split('').reduce((accumulator, letter) => {
        accumulator[letter] = accumulator[letter] || 0;
        accumulator[letter]++
        return accumulator
    }, {})
    const requiredUnique = Object.entries(targetDict).length

    const currentWindowDict = {}
    let currentUnique = 0

    let solution = ''

    let left = 0
    let right = 0

    while (right < s.length) {
        const currentLetter = s[right]
        currentWindowDict[currentLetter] = currentWindowDict[currentLetter] || 0
        currentWindowDict[currentLetter]++

        if (
            targetDict.hasOwnProperty(currentLetter) &&
            currentWindowDict[currentLetter] === targetDict[currentLetter]
        ) {
            currentUnique++
        }

        while (currentUnique === requiredUnique) {
            const currentLength = right - left + 1
            if (solution === '' || currentLength < solution.length) {
                solution = s.substring(left, right + 1)
            }

            currentWindowDict[s[left]]--
            if (
                targetDict.hasOwnProperty(s[left]) &&
                currentWindowDict[s[left]] < targetDict[s[left]]
            ) {
                currentUnique--
            }

            left++
        }

        right++
    }

    return solution
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(minWindow('ADOBECODEBANC', 'ABC'), 'and output should be "BANC"')





