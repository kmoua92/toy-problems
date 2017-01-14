describe('magicIndex', function() {

  it('should return a number', function() {
    var result = magicIndex([-10, -5, 0, 3, 5, 25]);

    expect(result).to.be.a('number');
  });

  it('should return correct result for basic case', function() {
    var result = magicIndex([-10, -5, 0, 3, 5, 25]);

    expect(result).to.be.eql(3);
  });

  xit('should have less than O(n) time complexity', function() {
    var originalFunction = magicIndex;
    magicIndex = sinon.spy(magicIndex);
    magicIndex([-10, -5, 0, 3, 5, 25]);

    expect(magicIndex.callCount).to.be.below(6);

    magicIndex = originalFunction;
  }); 
});
