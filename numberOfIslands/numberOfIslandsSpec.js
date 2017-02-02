describe('numberOfIslands', function() {

  it('should return a number', function() {
    var result = numberOfIslands([[1]]);

    expect(result).to.be.a('number');
  });

  it('should return correct answer for example matrix', function() {
    var exampleMatrix1 = [
      [1, 1, 1, 1, 0]
      [1, 1, 0, 1, 0]
      [1, 1, 0, 0, 0]
      [0, 0, 0, 0, 0]
    ];
    var result = numberOfIslands(exampleMatrix1);

    expect(result).to.be.equal(1);
  });

  it('should return correct answer for second example matrix', function() {
    var exampleMatrix2 = [
      [1, 1, 0, 0, 0]
      [1, 1, 0, 0, 0]
      [0, 0, 1, 0, 0]
      [0, 0, 0, 1, 1]
    ];
    var result = numberOfIslands(exampleMatrix2);

    expect(result).to.be.equal(3);
  });

  it('should handle non-square matrices', function() {
    var exampleMatrix3 = [
      [1, 1, 0, 0]
      [1, 1, 0, 0]
      [0, 0, 1, 0]
    ];
    var result = numberOfIslands(exampleMatrix3);

    expect(result).to.be.equal(2);
  });

  it('should handle matrix with all water', function() {
    var exampleMatrix4 = [
      [0, 0, 0]
      [0, 0, 0]
      [0, 0, 0]
    ];
    var result = numberOfIslands(exampleMatrix4);

    expect(result).to.be.equal(0);
  });

  it('should handle an all-island matrix', function() {
    var exampleMatrix5 = [
      [1, 1, 1]
      [1, 1, 1]
      [1, 1, 1]
    ];
    var result = numberOfIslands(exampleMatrix5);

    expect(result).to.be.equal(1);
  });
});
