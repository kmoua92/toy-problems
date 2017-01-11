describe('fibonacciMemoization', function() {

  it('should return a number', function() {
    var result = fibonacciMemoization(5);

    expect(result).to.be.a('number');
  });

  it('should return correct fibonacci number', function() {
    var result = fibonacciMemoization(5);

    expect(result).to.be.eql(5);
  });

  it('should handle n value of 39', function() {
    var result = fibonacciMemoization(39);

    expect(result).to.be.eql(63245986);
  });

  xit('should have O(n) time complexity', function() {
    var originalFunction = fibonacciMemoization;
    fibonacciMemoization = sinon.spy(fibonacciMemoization);
    fibonacciMemoization(5);

    expect(fibonacciMemoization.callCount).to.be.eql(9);

    fibonacciMemoization = originalFunction;
  });
});
