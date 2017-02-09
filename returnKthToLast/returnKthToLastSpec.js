describe('returnKthToLast', function() {

  it('should return an object', function() {
    var linkedList = new LinkedList;
    linkedList.addToTail(1);
    var result = returnKthToLast(linkedList);

    expect(result).to.be.a('object');
  });

  it('should handle a short Linked List', function() {
    var linkedList = new LinkedList;
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    var result = returnKthToLast(linkedList.head, 2);

    expect(result.value).to.be.equal(2);
  });

  it('should handle a long Linked List', function() {
    var linkedList = new LinkedList;
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    linkedList.addToTail(9);
    linkedList.addToTail(10);
    var result = returnKthToLast(linkedList.head, 8);

    expect(result.value).to.be.equal(3);
  });

  it('should handle a Linked List with only one Node', function() {
    var linkedList = new LinkedList;
    linkedList.addToTail(1);
    var result = returnKthToLast(linkedList.head, 1);

    expect(result.value).to.be.equal(1);
  });
});
