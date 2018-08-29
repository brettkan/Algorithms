/*

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 var invertTree = function(root) {
     const queue = [root]

     while (queue.length) {
        let current = queue.shift()
        let leftRef = current.left
        current.left = current.right
        current.right = leftRef

        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
     }

     return root
 }

/**
 * Recursive Solution
 ** 
var invertTree = function(root) {
    if (!root) {
        return null
    }

    const leftRef = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(leftRef)

    return root
};
*/

/**
 * HELPERS
 **/

//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * TEST CASES
 **/

const node1 = new TreeNode(4)
const node2 = new TreeNode(2)
const node3 = new TreeNode(7)
const node4 = new TreeNode(1)
const node5 = new TreeNode(3)
const node6 = new TreeNode(6)
const node7 = new TreeNode(9)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

console.log(invertTree(node1))
