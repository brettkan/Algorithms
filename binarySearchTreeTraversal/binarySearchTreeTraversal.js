/*

Implement three methods of traversing a binary search tree

In order
Pre order
Post order

*/

function inOrderTraversal(root) {
    if (root) {
        inOrderTraversal(root.left)
        doWork(root)
        inOrderTraversal(root.right)
    }
}

function preOrderTraversal(root) {
    if (root) {
        doWork(root)
        preOrderTraversal(root.left)
        preOrderTraversal(root.right)
    }
}

function postOrderTraversal(root) {
    if (root) {
        postOrderTraversal(root.left)
        postOrderTraversal(root.right)
        doWork(root)
    }

}

function doWork(node) {
    console.log(node.val)
}


/**
 * HELPERS
 **/

 class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
 }

/**
 * TEST CASES
 **/

/**
        4
       / \
      2   6
     /   / \
    1   5   7
    
*/

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)
const seven = new Node(7)

four.left = two
four.right = six
two.left = one
six.left = five
six.right = seven

console.log('IN ORDER TRAVERSAL:')
inOrderTraversal(four)
console.log('PRE ORDER TRAVERSAL:')
preOrderTraversal(four)
console.log('POST ORDER TRAVERSAL:')
postOrderTraversal(four)
