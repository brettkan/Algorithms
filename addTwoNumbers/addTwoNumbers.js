/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
    const firstVal = l1.val + l2.val
    const resultNode = new ListNode(firstVal % 10)
    let carry = Math.floor(firstVal / 10)

    let currentNode1 = l1.next
    let currentNode2 = l2.next
    let currentResultNode = resultNode

    while (currentNode1 || currentNode2 || carry) {
        if (!currentNode1) {
            currentNode1 = new ListNode(0)
        }

        if (!currentNode2) {
            currentNode2 = new ListNode(0)
        }

        let nextVal = currentNode1.val + currentNode2.val + carry
        carry = Math.floor(nextVal / 10)
        currentResultNode.next = new ListNode(nextVal % 10)
        currentResultNode = currentResultNode.next

        currentNode1 = currentNode1.next
        currentNode2 = currentNode2.next
    }

    return resultNode
}

/**
The answer below sort of works, except does not handle the use case of large numbers w/ scientific notation


var addTwoNumbers = function(l1, l2) {
    const sum = getNumberFromNode(l1) + getNumberFromNode(l2)
    const sumArr = sum.toString().split('').reverse().map(stringNum => {
        return Number(stringNum)
    })

    return createListFromBackwardsArray(sumArr)
};

function getNumberFromNode(node) {
    const num = getStringNumberFromNode(node)
    return Number(num)
}

function getStringNumberFromNode(node) {
    if (!node) {
        return ''
    }

    return getStringNumberFromNode(node.next) + node.val.toString()
}
*/

// HELPERS

function createListFromBackwardsArray(arr) {
    const forwardArr = arr.reverse()
    const resultNode = new ListNode(forwardArr.pop())
    let currentNode = resultNode
    while (forwardArr.length) {
        currentNode.next = new ListNode(forwardArr.pop())
        currentNode = currentNode.next
    }

    return resultNode
}

function getNumberFromNodeIterative(node) {
    let stringNum = ''
    for (let current = node; current; current = current.next) {
        stringNum = current.val + stringNum
    }
    return Number(stringNum)
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}


// TEST CASES

const nodeOne = createListFromBackwardsArray([2, 4, 3])
const nodeTwo = createListFromBackwardsArray([5, 6, 4])

console.log(addTwoNumbers(nodeOne, nodeTwo))

const nodeThree = createListFromBackwardsArray([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9])
const nodeFour = createListFromBackwardsArray([5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9])

console.log(addTwoNumbers(nodeThree, nodeFour))

