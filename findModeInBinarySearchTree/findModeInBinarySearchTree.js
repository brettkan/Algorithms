/*

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently
occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

For example:

Given BST [1,null,2,2],

   1
    \
     2
    /
   2
 
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space
incurred due to recursion does not count).

*/


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    
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

const node1 = new TreeNode(4)
const node2 = new TreeNode(2)
const node3 = new TreeNode(2)
node1.right = node2
node2.left = node3

console.log(findMode(node1), 'and answer should be 2')
