describe('removeDups', function() {

  var checkForDuplicates = function checkForDuplicates(head) {
    var currentNode = head;
    var values = {};
    var hasDuplicates = false;

    while (!hasDuplicates && currentNode) {
      if (values[currentNode.value]) {
        hasDuplicates = true;
      }

      values[currentNode.value] = true;
      currentNode = currentNode.next;
    }

    return hasDuplicates;
  };

  it('should return an object', function() {
    var list = new LinkedList();
    list.addToTail(1);
    var result = removeDups(list.head);

    expect(result).to.be.a('object');
  });

  it('should remove duplicates', function() {
    var list = new LinkedList();
    list.addToTail(1);
    list.addToTail(1);
    list.addToTail(4);
    var result = checkForDuplicates(list.head);

    expect(result).to.be.false;
  });

  it('should handle linkedList with no duplicates', function() {
    var list2 = new LinkedList();
    list2.addToTail(1);
    list2.addToTail(4);
    var result = checkForDuplicates(list2.head);

    expect(result).to.be.false;
  });
});
