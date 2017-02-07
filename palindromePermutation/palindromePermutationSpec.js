describe('palindromePermutation', function() {

  it('should return a boolean', function() {
    var result = palindromePermutation('cat');

    expect(result).to.be.a('boolean');
  });

  it('should return true for palindrome', function() {
    var result = palindromePermutation('radra');

    expect(result).to.be.true;
  });

  it('should return false for non-palindrome', function() {
    var result = palindromePermutation('radrac');

    expect(result).to.be.false;
  });

  it('should handle spaces', function() {
    var result = palindromePermutation('Tact Coa');

    expect(result).to.be.true;
  });

  it('should handle empty string', function() {
    var result = palindromePermutation('');

    expect(result).to.be.false;
  });
});
