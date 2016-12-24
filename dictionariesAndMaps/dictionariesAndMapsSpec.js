describe('dictionariesAndMaps', function() {

  var phoneNumbersString = 'sam 99912222\ntom 11122222\nharry 12299933';

  it('should return an array', function() {
    var result = dictionariesAndMaps(3, phoneNumbersString, ['sam', 'edward', 'harry']);

    expect(result).to.be.a('array');
  });

  it('should return correct result', function() {
    var result = dictionariesAndMaps(5);

    expect(result).to.be.eql(['sam=99912222', 'Nof found', 'harry=12299933']);
  });

  it('should handle an empty phoneNumbersString', function() {
    var result = dictionariesAndMaps(0, '', ['sam', 'edward', 'harry']);

    expect(result).to.be.eql(['Not found', 'Not found', 'Not found']);
  });  
});
