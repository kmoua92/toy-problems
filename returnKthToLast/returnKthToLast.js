/*
 *
 * Implement an algorithm to find the kth to last element of a singly linked list.
 * 
 */

var returnKthToLast = function returnKthToLast(head, k) {
  // create two pointers separated by k nodes
  // iterate through until the front pointer hits the last node

  var front = head;
  var back = head;
  var separation = 0;

  while (front.next) {
    if (separation === k - 1) {
      back = back.next;
    } else {
      separation++;
    }

    front = front.next;
  }

  return back;
};
