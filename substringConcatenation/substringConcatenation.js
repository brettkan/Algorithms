/*

You are given a string, s, and a list of words, words, that are all of the same length. Find all starting
indices of substring(s) in s that is a concatenation of each word in words exactly once and without any
intervening characters.

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:

Input:
  s = "wordgoodstudentgoodword",
  words = ["word","student"]
Output: []

*/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words.length) {
        return []
    }

    const solution = []

    const targetDict = getWordsDict(words)
    const wordLength = words[0].length

    for (let i = 0; i < s.length; i++) {
        const currentDict = {}
        const subStrEndIndex = i + (wordLength * words.length)
        let isSolution = true

        for (let j = i; j < subStrEndIndex; j += wordLength) {
            const nextSubStr = s.substr(j, wordLength)
            currentDict[nextSubStr] = currentDict[nextSubStr] || 0
            currentDict[nextSubStr]++

            if (!targetDict.hasOwnProperty(nextSubStr) || currentDict[nextSubStr] > targetDict[nextSubStr]) {
                isSolution = false
                break
            }
        }

        if (isSolution) {
            solution.push(i)
        }
    }

    return solution
};

function getWordsDict(words) {
    return words.reduce((accumulator, word) => {
        accumulator[word] = accumulator[word] || 0
        accumulator[word]++
        return accumulator
    }, {})
}

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(findSubstring('barfoothefoobarman', ["foo","bar"]), 'and output should be [0,9]')
console.log(findSubstring('wordgoodstudentgoodword', ["word","student"]), 'and output should be []')





