/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

Input:
    2
   / \
  1   3
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6
Output: false

Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.

*/


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
};


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

const node1 = new TreeNode(2)
const node2 = new TreeNode(1)
const node3 = new TreeNode(3)
node1.left = node2
node1.right = node3

const nodeA = new TreeNode(5)
const nodeB = new TreeNode(1)
const nodeC = new TreeNode(4)
const nodeD = new TreeNode(3)
const nodeE = new TreeNode(6)
nodeA.left = nodeB
nodeA.right = nodeC
nodeC.left = nodeD
nodeC.right = nodeE

console.log(isValidBST(node1), 'and answer should be true')
console.log(isValidBST(nodeA), 'and answer should be false')
