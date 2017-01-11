describe('timeString', function() {

  var input = '12:32 34:01 15:23 9:27 55:22 25:56';

  it('should return a string', function() {
    var result = timeString(input);

    expect(result).to.be.a('string');
  });

  it('should return correct result format', function() {
    var result = timeString(input);
    var test = /\d+:\d\d:\d\d/.test(result);

    expect(test).to.be.true;
  });

  it('should handle basic example', function() {
    var result = timeString(input);

    expect(result).to.be.eql('2:32:41');
  });  
});
