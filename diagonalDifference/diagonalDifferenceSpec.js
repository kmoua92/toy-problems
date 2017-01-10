describe('diagonalDifference', function() {

  var matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];

  it('should return a number', function() {
    var result = diagonalDifference(matrix);

    expect(result).to.be.a('number');
  });

  it('should return correct result for 3x3 matrix', function() {
    var result = diagonalDifference(matrix);

    expect(result).to.be.eql(15);
  });

  it('should handle a 1x1 matrix', function() {
    var result = diagonalDifference([[1]]);

    expect(result).to.be.eql(0);
  });  
});
