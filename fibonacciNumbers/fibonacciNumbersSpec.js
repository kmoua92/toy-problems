describe('fibonacciNumbers', function() {

  it('should return a number', function() {
    var result = fibonacciNumbers(5);

    expect(result).to.be.a('number');
  });

  it('should return correct fibonacci number', function() {
    var result = fibonacciNumbers(5);

    expect(result).to.be.eql(5);
  });

  it('should handle n value of 39', function() {
    var result = fibonacciNumbers(39);

    expect(result).to.be.eql(63245986);
  });  
});
