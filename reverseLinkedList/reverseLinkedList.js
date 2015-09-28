/* 

Write a function for reversing a linked list.

Your function will have one input: the head of the list.

Your function should return the new head of the list.

example: 

var nodeA = new Node('A');
var nodeB = new Node('B');
var nodeC = new Node('C');
var nodeD = new Node('D');
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

reverseLinkedList(nodeA); // should return nodeD

*/

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var reverseLinkedList = function(headNode) {
  var prev = null;
  var next;

  for (var node = headNode; node; node = next) {
    next = node.next;
    node.next = prev;
    prev = node;
  }

  return prev;
};

