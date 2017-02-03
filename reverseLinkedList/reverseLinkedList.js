/*
 *
 * Reverse a linked list.
 *
 * Constraints:
 * Time Complexity O(n)
 * Space Complexity O(1)
 * 
 */

var reverseLinkedList = function reverseLinkedList(head) {
  // loop through the list linearly
  // change the pointer to point the previous node
  
  var nodes = {
    current: head,
    next: head.next,
    previous: null
  };

  while (nodes.current) {
    // point the current node to the previous node
    nodes.current.next = nodes.previous;

    // move all node trackers one over
    nodes.previous = nodes.current;
    nodes.current = nodes.next;
    nodes.next = nodes.next ? nodes.next.next : null;
  }

  return nodes.previous;
};
