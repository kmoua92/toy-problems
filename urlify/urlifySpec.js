describe('urlify', function() {

  it('should return a string', function() {
    var result = urlify('Mr John Smith    ', 13);

    expect(result).to.be.a('string');
  });

  it('should return correct result for example', function() {
    var result = urlify('Mr John Smith    ', 13);

    expect(result).to.be.equal('Mr%20John%20Smith');
  });

  it('should handle no spaces', function() {
    var result = urlify('abc', 3);

    expect(result).to.be.eql('abc');
  });

  it('should handle all spaces', function() {
    var result = urlify('         ', 3);

    expect(result).to.be.eql('%20%20%20');
  });
});
