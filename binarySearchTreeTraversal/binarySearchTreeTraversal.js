/*

Implement three methods of traversing a binary search tree

In order
Pre order
Post order

*/

function inOrderTraversal(root) {
    
}

function preOrderTraversal(root) {

}

function postOrderTraversal(root) {

}

function doWork(val) {
    console.log(val)
}


/**
 * HELPERS
 **/



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

console.log('IN ORDER TRAVERSAL:\n', inOrderTraversal(four))
console.log('PRE ORDER TRAVERSAL:\n', preOrderTraversal(four))
console.log('POST ORDER TRAVERSAL:\n', postOrderTraversal(four))
