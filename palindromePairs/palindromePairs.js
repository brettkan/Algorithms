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
var palindromePairs = function(words) {
    const solution = []
    let wordsDict = words.reduce((aggregator, word, index) => {
        aggregator[word] = index
        return aggregator
    }, {})

    for (let i = 0; i < words.length; i++) {
        const current = words[i]

        // if word is a palindrome, get index of any empty strings
        if (isPalindrome(current) && current !== '') {
            if (wordsDict.hasOwnProperty('')) {
                solution.push([i, wordsDict['']])
                solution.push([wordsDict[''], i])
            }
        }

        // if reversed word exists, it is a palindrome
        const reversed = reverseStr(current)
        if (wordsDict.hasOwnProperty(reversed) && wordsDict[reversed] !== i) {
            solution.push([i, wordsDict[reversed]])
        }

        // check for left and right palindromes
        for (let j = 1; j < current.length; j++) {
            const left = current.slice(0, j)
            const right = current.slice(j)

            if (isPalindrome(left)) {
                const rightReversed = reverseStr(right)
                if (wordsDict.hasOwnProperty(rightReversed)) {
                    solution.push([wordsDict[rightReversed], i])
                }
            }

            if (isPalindrome(right)) {
                const leftReversed = reverseStr(left)
                if (wordsDict.hasOwnProperty(leftReversed)) {
                    solution.push([i, wordsDict[leftReversed]])
                }
            }
        }
    }

    return solution
}

function isPalindrome(word) {
    let i = 0
    let j = word.length - 1

    while (i <= j) {
        if (word[i] !== word[j]) {
            return false
        }
        i++
        j--
    }

    return true
}

function reverseStr(str) {
    return str.split('').reverse().join('')
}

/**
 * BRUTE FORCE
 **
var palindromePairs = function(words) {
    const pairs = []

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
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

*/


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]), 'and the answer is [[0,1],[1,0],[3,2],[2,4]]')
console.log(palindromePairs(["bat","tab","cat"]), 'and the answer is [[1, 0], [0, 1]]')
console.log(palindromePairs(["a",""]), 'and the answer is [[1, 0], [0, 1]]')
