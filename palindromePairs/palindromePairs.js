/*

Given a list of unique words, find all pairs of distinct indices (i, j) in the given list,
so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.


Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]


Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]

*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */

/**
 * BRUTE FORCE
 **/
var palindromePairs = function(words) {
    const pairs = []

    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length; j++) {
            if (isPalindrome(words[i] + words[j])) {
                pairs.push([i, j])
            }

            if (isPalindrome(words[j] + words[i])) {
                pairs.push([j, i])
            }

        }
    }

    return pairs
};

function isPalindrome(word) {
    return word === word.split('').reverse().join('')
}


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]), 'and the answer is [[0,1],[1,0],[3,2],[2,4]]')
console.log(palindromePairs(["bat","tab","cat"]), 'and the answer is [[1, 0], [0, 1]]')
