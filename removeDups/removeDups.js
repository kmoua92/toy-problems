/*
 *
 * Write code to remove duplicates from an unsorted linked list.
 *
 * Follow up: How would you solve this problem if a temporary buffer is not allowed?
 * 
 */

var removeDups = function removeDups(head) {
  // build a map to track non-duplicate nodes
  // if duplacte node
    // link previous node to next node in order to bypass the current duplicate node
  
  var map = {};
  var currentNode = head;
  var previousNode = null;

  while (currentNode) {
    if (map[currentNode.value]) {
      previousNode.next = currentNode.next;
    } else {
      map[currentNode.value] = true;
      previousNode = currentNode;
    }

    currentNode = currentNode.next;
  }

  return head;
};
