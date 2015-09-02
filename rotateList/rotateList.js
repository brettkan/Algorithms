/* 

Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.

Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}; 

*/

var rotateList = function(head, k) {
  var totalNodes = 0;
  for (var node = head; node; node = node.next) {
    totalNodes++;
  }

  k = k % totalNodes;
  
  var counter = 0;
  var breakPoint = totalNodes - k;
  for (var node = head; node; node = node.next) {
    counter++;
    if (counter === breakPoint) {
      var storedNode = node.next;
      node.next = null;
      node = storedNode;
      counter++;
    } 

    if (counter === totalNodes) {
      node.next = head;
      break;
    }
  }

  return result.slice(numToAdd);
};
