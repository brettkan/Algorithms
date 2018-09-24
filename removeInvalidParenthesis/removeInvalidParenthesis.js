/*

Remove the minimum number of invalid parentheses in order to make the input string valid.
Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]

Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]

Example 3:

Input: ")("
Output: [""]

*/


/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(removeInvalidParentheses('()())()'), 'and output should be ["()()()", "(())()"]')
console.log(removeInvalidParentheses('(a)())()'), 'and output should be ["(a)()()", "(a())()"]')
console.log(removeInvalidParentheses(')('), 'and output should be [""]')





