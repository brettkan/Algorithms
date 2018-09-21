/*

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groupedAnagrams = {}

    for (let i = 0; i < strs.length; i++) {
        const curStr = strs[i]
        const letterMap = getLetterMap(curStr)
        groupedAnagrams[letterMap] = groupedAnagrams[letterMap] || []
        groupedAnagrams[letterMap].push(curStr)
    }

    return Object.values(groupedAnagrams)
};

function getLetterMap(str) {
    let letterMap = []

    for (let i = 0; i < str.length; i++) {
        let letterMapIndex = str.charCodeAt(i) - 97
        letterMap[letterMapIndex] = letterMap[letterMapIndex] || 0
        letterMap[letterMapIndex]++
    }

    return letterMap.join(',')
}

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))



