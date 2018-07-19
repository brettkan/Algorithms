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

// function getNumberFromNodeIterative(node) {
//     let stringNum = ''
//     for (let current = node; current; current = current.next) {
//         stringNum = current.val + stringNum
//     }
//     return Number(stringNum)
// }

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// const nodeOne = createListFromBackwardsArray([2, 4, 3])
// const nodeTwo = createListFromBackwardsArray([5, 6, 4])

// console.log(addTwoNumbers(nodeOne, nodeTwo))

const nodeThree = createListFromBackwardsArray([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9])
const nodeFour = createListFromBackwardsArray([5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9])

console.log(addTwoNumbers(nodeThree, nodeFour))

