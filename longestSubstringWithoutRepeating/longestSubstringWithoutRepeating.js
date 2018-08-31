/*

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", which the length is 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function lengthOfLongestSubstring(s) {
    const indices = {}
    let lastRepeatedIndex = -1
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        if (indices.hasOwnProperty(s[i])) {
            lastRepeatedIndex = Math.max(indices[s[i]], lastRepeatedIndex)
        }

        indices[s[i]] = i
        maxLength = Math.max(maxLength, i - lastRepeatedIndex)
    }
    
    return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
