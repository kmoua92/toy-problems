describe('linkedList', function() {

  it('should designate a new tail when new nodes are added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    expect(list.tail.value).to.equal(4);
    list.addToTail(5);
    expect(list.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    expect(list.head.value).to.equal(4);
    list.removeHead();
    expect(list.head.value).to.equal(5);
  });

  it('should remove the head and tail from the list when removeHead is called and there is only one element present', function() {
    var list = new LinkedList();
    list.addToTail(4);
    expect(list.head.value).to.equal(4);
    expect(list.tail.value).to.equal(4);
    list.removeHead();
    expect(list.head).to.be.null;
    expect(list.tail).to.be.null;
  });

  it('should return the value of the removed head when removeHead is called', function() {
    var list = new LinkedList();
    list.addToTail(4);
    expect(list.head.value).to.equal(4);
    expect(list.tail.value).to.equal(4);
    var returnValue = list.removeHead();
    expect(returnValue).to.equal(4);
  });

  it('should return null when removeHead is called on an empty list', function() {
    var list = new LinkedList();
    var returnValue = list.removeHead();
    expect(returnValue).to.be.null;
  });

  it('should contain a value that was added', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    expect( list.contains(4) ).to.be.true;
    expect( list.contains(5) ).to.be.true;
    expect( list.contains(6) ).to.be.false;
  });

  it('should not contain a value that was removed', function() {
    var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.removeHead();
    expect( list.contains(4) ).to.be.false;
  });
});
