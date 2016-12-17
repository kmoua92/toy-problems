describe('makingAnagrams', function() {

  it('should return a number', function() {
    var a = 'cde';
    var b = 'abc';
    var result = makingAnagrams(a, b);

    expect(result).to.be.a('number');
  });

  it('should produce correct result for generic inputs', function() {
    var a = 'cde';
    var b = 'abc';
    var result = makingAnagrams(a, b);

    expect(result).to.be.eql(4);
  });

  it('should handle indentical strings', function() {
    var a = 'a';
    var b = 'a';
    var result = makingAnagrams(a, b);

    expect(result).to.be.eql(0);
  });  
});
