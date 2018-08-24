/*

Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"

Corner Cases:

Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".

*/


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArr = path.split('/')
    const simplified = []

    for (var i = 0; i < pathArr.length; i++) {
        let curr = pathArr[i]

        switch (curr) {
            case '':
            case '.':
                break
            case '..':
                simplified.pop()
                break
            default:
                simplified.push(curr)
        }
    }

    return '/' + simplified.join('/')
};


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(simplifyPath("/home/"), 'and the answer is: /home')
console.log(simplifyPath("/a/./b/../../c/"), 'and the answer is: /c')
