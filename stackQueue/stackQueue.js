/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = [];
  this.count = 0;

  // add an item to the top of the stack
  this.push = function(item) {
    this.storage[this.count++] = item;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    if (this.count > 0) {
      var popped = this.storage[--this.count];
      this.storage[this.count] = undefined;
    }
    return popped || null;
  };

  // return the number of items in the stack
  this.size = function() {
    return this.count;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    if (outbox.size() === 0 && inbox.size() > 0) {
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};