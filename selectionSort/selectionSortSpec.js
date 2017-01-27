describe('selectionSort', function() {

  var checkIfSorted = function(array) {
    return array.reduce(function(isSorted, number, index, array) {
      return isSorted && number >= array[index - 1];
    }, true);
  };

  it('should return an array', function() {
    var result = selectionSort([]);

    expect(result).to.be.a('array');
  });

  it('should return a sorted array', function() {
    var result = selectionSort([5, 1, 4]);

    expect( checkIfSorted(result) ).to.be.true;
  });

  it('should handle a sorted array', function() {
    var result = selectionSort([1, 2, 3]);

    expect( checkIfSorted(result) ).to.be.true;
  });

  it('should handle empty array', function() {
    var result = selectionSort([]);

    expect(result).to.be.null;
  });
});
