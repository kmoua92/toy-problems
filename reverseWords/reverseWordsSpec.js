describe('reverseWords', function() {

  var exampleInput = '3\nthis is a test\nfoobar\nall your base';

  it('should return a string', function() {
    var result = reverseWords(exampleInput);

    expect(result).to.be.a('string');
  });

  it('should return a string with correct number of line breaks', function() {
    var result = reverseWords(exampleInput);

    expect( result.split('\n').length ).to.be.equal(3);
  });

  it('should handle small input', function() {
    var result = reverseWords('5\nthis is a test\nfoobar\nall your base\nclass\npony along');

    expect(result).to.be.equal('Case #1: test a is this\nCase #2: foobar\nCase #3: base your all\nCase #4: class\nCase #5: along pony');
  });
});
