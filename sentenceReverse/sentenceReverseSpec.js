describe('sentenceReverse', function() {

  var exampleInput = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ', 'm', 'a', 'k', 'e', 's', ' ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ];
  var exampleOutput = [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ', 'm', 'a', 'k', 'e', 's', ' ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ];

  it('should return an array', function() {
    var result = sentenceReverse(exampleInput.slice());

    expect(result).to.be.a('array');
  });

  it('should return a the correct reversed sentence for example', function() {
    var result = sentenceReverse(exampleInput.slice());

    expect(result).to.be.eql(exampleOutput);
  });

  it('should handle empty array', function() {
    var result = sentenceReverse([]);

    expect(result).to.be.eql([]);
  });

  it('should handle array with no spaces', function() {
    var result = sentenceReverse(['h', 'i']);

    expect(result).to.be.eql(['h', 'i']);
  });

  it('should handle array with only spaces', function() {
    var result = sentenceReverse([' ', ' ']);

    expect(result).to.be.eql([' ', ' ']);
  });

  it('should handle array with multiple spaces between words', function() {
    var result = sentenceReverse(['a', ' ', ' ', 'b', ' ', 'c']);

    expect(result).to.be.eql(['c', ' ', 'b', ' ', ' ', 'a']);
  });

  it('should handle array with multiple spaces in single string between words', function() {
    var result = sentenceReverse(['a', '  ', 'b', '  ', 'c']);

    expect(result).to.be.eql(['c', '  ', 'b', '  ', 'a']);
  });
});
