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
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] === null || lists[i].val === null) {
            lists.splice(i, 1)
            i--
        }
    }

    if (!lists || lists.length === 0) {
        return null
    }

    while (lists.length > 1) {
        lists.push(mergeTwoLists(lists.shift(), lists.shift()))
    }

    return lists[0]
}

function mergeTwoLists(listA, listB) {
    let linkedList = new LinkedList()
    let nodeA = listA
    let nodeB = listB

    while (nodeA || nodeB) {
        if (!nodeB || (nodeA && nodeA.val < nodeB.val)) {
            linkedList.addNode(nodeA.val)
            nodeA = nodeA.next
        } else {
            linkedList.addNode(nodeB.val)
            nodeB = nodeB.next
        }
    }

    return linkedList.head
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addNode(val) {
        const node = new ListNode(val)
        if (this.head === null && this.tail === null) {
            this.head = node
            this.tail = node
            return this.head
        }

        this.tail.next = node
        this.tail = this.tail.next
    }
}

/**
 * SECOND SOLUTION
 **
var mergeKLists = function(lists) {
    let solutionList = new LinkedList()

    for (let k = 0; k < lists.length; k++) {
        if (!lists[k]) {
            lists.splice(k, 1)
            k--
        }
    }

    while (lists.length) {
        let currentMin = Infinity
        let minIndex
        for (let i = 0; i < lists.length; i++) {
            let current = lists[i]

            if (current.val < currentMin) {
                currentMin = current.val
                minIndex = i
            }
        }

        const minHead = lists[minIndex]
        const minHeadNext = minHead.next
        minHead.next = null
        solutionList.addNode(minHead)

        if (minHeadNext) {
            lists[minIndex] = minHeadNext
        } else {
            lists.splice(minIndex, 1)
        }
    }

    return solutionList.head
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addNode(node) {
        if (this.head === null && this.tail === null) {
            this.head = node
            this.tail = node
            return this.head
        }

        this.tail.next = node
        this.tail = this.tail.next
    }
}

*/

/**
 * BRUTE FORCE SOLUTION
 **
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

*/

/**
 * HELPERS
 **/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createListFromArray(arr) {
    const linkedList = new LinkedList()

    for (let i = 0; i < arr.length; i++) {
        linkedList.addNode(arr[i])
    }

    return linkedList.head
}

/**
 * TEST CASES
 **/

const testCases = [
    [[0,2,5]],
    [[1,4,5], [1,3,4], [2,6]],
    [[1,2,3], [4,5,6,7]],
]

testCases.forEach(test => {
    const cases = test.map(createListFromArray)
    console.log(mergeKLists(cases))
})



