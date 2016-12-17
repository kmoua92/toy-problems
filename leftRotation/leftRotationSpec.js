describe('leftRotation', function() {

  it('should return an array', function() {
    var inputArary = [1, 2, 3, 4, 5];
    var numberOfRotations = 4;
    var result = leftRotation(inputArary, numberOfRotations);

    expect(result).to.be.a('array');
  });

  it('should rotate a generic array', function() {
    var inputArary = [1, 2, 3, 4, 5];
    var numberOfRotations = 4;
    var result = leftRotation(inputArary, numberOfRotations);

    expect(result).to.be.eql([5, 1, 2, 3, 4]);
  });

  it('should handle an array of length 1', function() {
    var inputArary = [1];
    var numberOfRotations = 1;
    var result = leftRotation(inputArary, numberOfRotations);

    expect(result).to.be.eql([1]);
  });  
});
