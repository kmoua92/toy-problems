describe('quickSort', function() {

  it('should exist', function() {
    expect(quickSort).to.exist;
  });

  it('should be a function', function() {
    expect(quickSort).to.be.a('function');
  });

  it('should return an array', function() {
    var result = quickSort([]);

    expect(result).to.be.a('array');
  });

  it('should handle an array with one item', function() {
    var result = quickSort([1]);

    expect(result).to.be.eql([1]);
  });

  it('should sort an array of integers', function() {
    var result = quickSort([8, 7, 3, 6, 9, 2, 4, 5, 1]);

    expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should not use Array.sort', function() {
    var _sort = Array.prototype.sort;
    Object.defineProperty(Array.prototype, 'sort', { enumerable: false,
      value: function value() {
        should.fail(null, null, 'Array.sort called! That\'s cheating.', null);
      }
    });
    var result = quickSort([8, 7, 3, 6, 9, 2, 4, 5, 1]);
    Object.defineProperty(Array.prototype, 'sort', { enumerable: false,
      value: _sort
    });
  });

  it('should sort an enormous array', function() {
    this.timeout(5000);
    var input = [];
    var sorted;
    var n = 1000000;
    for (var i = 0; i < n; i++) {
      var number = Math.floor(Math.random() * n);
      input.push(number);
    }
    sorted = input.sort(function (a, b) {
      return a - b;
    }); // sort numerically, not lexicographically
    var result = quickSort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (var i = 0; i < n; i++) {
      expect(result[i]).to.equal(sorted[i]);
    }
  });
});
