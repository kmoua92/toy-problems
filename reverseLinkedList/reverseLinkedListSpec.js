describe('reverseLinkedList', function() {

  var Node = function(value) {
    this.value = value;
    this.next = null;
  };

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

  LinkedList.prototype.contains = function(value) {
    head = !head ? this.head : head;

    if (!head) { return false; }
    return head.value === value ? true : this.contains(value, head.next);
  };

  LinkedList.prototype.makeNode = function(value) {
    return new Node(value);
  };

  LinkedList.prototype.returnAllNodes = function() {
    var nodes = [];
    var currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  };

  it('should return an object', function() {
    var linkedList = new LinkedList;
    linkedList.addToTail(1);
    var result = reverseLinkedList(linkedList);

    expect(result).to.be.a('object');
  });

  it('should reverse a short Linked List', function() {
    var linkedList = new LinkedList;
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    reverseLinkedList(linkedList);
    var nodes = linkedList.returnAllNodes();

    expect(nodes).to.be.equal([1, 2, 3]);
  });
});
