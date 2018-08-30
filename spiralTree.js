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
    const queue = [[rootNode]]
    let currentLevel = 0

    const levels = [] // [[1], [2]]

    while (queue.length > 0) { /// [[3]]
        let levelWrapper = queue[0]
        if (levelWrapper.length === 0) {
            queue.shift()
            continue
        }

        let currentNode = queue[0].shift()
        levels[currentLevel] = levels[currentLevel] || []
        levels[currentLevel].push(currentNode.val)

        if (levelWrapper.length === 0) {
            currentLevel++
        }

        queue[currentLevel] = queue[currentLevel] || []
        queue[currentLevel].push(currentNode.left)
        queue[currentLevel].push(currentNode.right)
    }
}

// queue = [3, 2]

console.log(spiralTraversal(one)); // 1, 3, 2, 4, 5, 6, 7