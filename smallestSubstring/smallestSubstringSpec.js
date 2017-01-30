describe('smallestSubstring', function() {

  var exampleArr = ['x', 'y', 'z'];
  var exampleStr = 'xyyzyzyx';

  it('should return a string', function() {
    var result = smallestSubstring(exampleArr, exampleStr);

    expect(result).to.be.a('string');
  });

  it('should handle example case', function() {
    var result = smallestSubstring(exampleArr, exampleStr);

    expect(result).to.be.equal('zyx');
  });

  it('should return first substring if there are multiple shortest', function() {
    var arr = ['a', 'b', 'c'];
    var str = 'ccbcab'
    var result = smallestSubstring(arr, str);

    expect(result).to.be.equal('bca');
  });
});
