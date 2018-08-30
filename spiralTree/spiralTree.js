/*

Implement a function that prints to the console
all the nodes of a binary tree in a spiral order.

Ex.

        1
      /   \
    2       3
  /  \     /  \
 4    5   6    7

[[1], [2, 3], [4, 5, 6, 7]]

Output: 1, 3, 2, 4, 5, 6, 7


         1
        / \
       2   3
          / \
         4   5
        /     \
       6       7
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

function spiralTraversal(rootNode) {
    const stackOne = [rootNode]
    const stackTwo = []

    function traverseStackOne() { // left to right
        while (stackOne.length) {
            const current = stackOne.pop()
            console.log(current.val)
            if (current.left) {
                stackTwo.push(current.left)
            }
            if (current.right) {
                stackTwo.push(current.right)
            }
        }
    }

    function traverseStackTwo() { // right to left
        while (stackTwo.length) {
            const current = stackTwo.pop()
            console.log(current.val)
            if (current.right) {
                stackOne.push(current.right)
            }
            if (current.left) {
                stackOne.push(current.left)
            }
        }
    }

    while (stackOne.length || stackTwo.length) {
        traverseStackOne()
        traverseStackTwo()
    }
}

console.log(spiralTraversal(one)); // 1, 3, 2, 4, 5, 6, 7
