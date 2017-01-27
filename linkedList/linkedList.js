/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  var oldTail = this.tail;
  var newTail = this.makeNode(value);

  this.tail = newTail;
  oldTail ? oldTail.next = newTail : this.head = newTail;
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  var newHead = this.head !== this.tail ? this.head.next : null;

  this.head = newHead;
  this.tail = !newHead ? null : this.tail;
  return !oldHead ? null : oldHead.value;
};

LinkedList.prototype.contains = function(value, head) {
  head = head === undefined ? this.head : head;

  if (!head) { return false; }
  return head.value === value ? true : this.contains(value, head.next);
};

LinkedList.prototype.makeNode = function(value) {
  return {
    value: value,
    next: null
  };
};
