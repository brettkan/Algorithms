/*

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

*/


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const sortArray = []

    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        while (node) {
            sortArray.push(node.val)
            node = node.next
        }
    }

    return createLinkedListFromArray(sortArray.sort((a, b) => a - b))
};

function createLinkedListFromArray(arr) {
    let node = new ListNode(arr[0])
    const headNode = node

    if (!arr.length) {
        return null
    }

    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }

    return headNode
}

/**
 * HELPERS
 **/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * TEST CASES
 **/

const a = new ListNode(1)
const b = new ListNode(4)
const c = new ListNode(5)
a.next = b
b.next = c

const d = new ListNode(1)
const e = new ListNode(3)
const f = new ListNode(4)
d.next = e
e.next = f

const g = new ListNode(2)
const h = new ListNode(6)
g.next = h

const args1 = [a, d, g]
console.log(mergeKLists(args1))
