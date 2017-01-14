describe('magicIndex', function() {

  it('should return a number', function() {
    var result = magicIndex([-10, -5, 0, 3, 5, 25]);

    expect(result).to.be.a('number');
  });

  it('should return correct result for basic case', function() {
    var result = magicIndex([-10, -5, 0, 3, 5, 25]);

    expect(result).to.be.eql(3);
  });

  it('should handle an array with non-distinct values', function() {
    var result = magicIndex([-10, -5, 0, 3, 3, 5, 25]);

    expect(result).to.be.eql(3);
  });  
});
