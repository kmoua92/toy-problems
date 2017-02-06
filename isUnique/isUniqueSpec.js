describe('isUnique', function() {

  it('should return a boolean', function() {
    var result = isUnique('test');

    expect(result).to.be.a('boolean');
  });

  it('should handle false example case', function() {
    var result = isUnique('hello');

    expect(result).to.be.false;
  });

  it('should handle true example case', function() {
    var result = isUnique('abc');

    expect(result).to.be.true;
  });

  it('should handle string with one character', function() {
    var result = isUnique('a');

    expect(result).to.be.true;
  });

  it('should handle empty string', function() {
    var result = isUnique('');

    expect(result).to.be.null;
  });
});
