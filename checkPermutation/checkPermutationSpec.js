describe('checkPermutation', function() {

  it('should return a boolean', function() {
    var result = checkPermutation('a', 'b');

    expect(result).to.be.a('boolean');
  });

  it('should handle false example case', function() {
    var result = checkPermutation('a', 'b');

    expect(result).to.be.false;
  });

  it('should handle true example case', function() {
    var result = checkPermutation('abc', 'cba');

    expect(result).to.be.true;
  });

  it('should handle capitalization', function() {
    var result = checkPermutation('abC', 'cba');

    expect(result).to.be.false;
  });

  it('should handle white space', function() {
    var result = checkPermutation('ab c', ' cba');

    expect(result).to.be.true;
  });
});
