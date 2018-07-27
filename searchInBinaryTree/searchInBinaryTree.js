/*

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST
that the node's value equals the given value. Return the subtree rooted with that node. If such node
doesn't exist, you should return NULL.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2
     / \
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should
return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized
tree format) as [], not null.

*/


/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

function searchBST(root, val) {
    const searchArray = [root]

    function searchNode(root, val) {
        if (root.val === val) {
            return root
        }

        if (root.left) {
            searchArray.push(root.left)
        }

        if (root.right) {
            searchArray.push(root.right)
        }

        return null
    }

    while (searchArray.length) {
        let nextNode = searchArray.shift()
        if (searchNode(nextNode, val)) {
            return nextNode
        }
    }

    return []
}

/**
 * DEPTH FIRST SEARCH SOLUTION
 **
function searchBST(root, val) {
    if (root.val === val) {
        return root
    }

    if (root.left) {
        const leftSearchResult = searchBST(root.left, val)
        if (leftSearchResult && !Array.isArray(leftSearchResult)) {
            return leftSearchResult
        }
    }

    if (root.right) {
        const rightSearchResult = searchBST(root.right, val)
        if (rightSearchResult && !Array.isArray(rightSearchResult)) {
            return rightSearchResult
        }
    }

    return []
}

*/

/**
 * HELPERS
 **/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * TEST CASES
 **/

const rootNode = new TreeNode(4)
const node2 = new TreeNode(2)
const node3 = new TreeNode(7)
const node4 = new TreeNode(1)
const node5 = new TreeNode(3)

rootNode.left = node2
rootNode.right = node3
node2.left = node4
node2.right = node5

console.log(searchBST(rootNode, 2))
console.log(searchBST(rootNode, 7))
console.log(searchBST(rootNode, 5))

