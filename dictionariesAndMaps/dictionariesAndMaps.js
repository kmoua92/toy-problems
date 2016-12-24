/*
 *
 * Given n names and phone numbers, assemble a phone book that maps friends' names to their
 * respective phone numbers. You will then be given an unknown number of names to query your
 * phone book for.
 *
 * Return an array that contains a result for each name in 'queries'. If there is an associated
 * entry in your phone book, populate your result array with the phone book entry in the form of
 * 'name=phoneNumber'. If an entry for name is not found, populate your result array with
 * 'Not found' instead.
 *
 * Example:
 *
 * var phoneNumbersString = 
 *   'sam 99912222
 *    tom 11122222
 *    harry 12299933';
 * 
 * dictionariesAndMaps(3, phoneNumbersString, ['sam', 'edward', 'harry'])
 * // returns --> ['sam=99912222', 'Nof found', 'harry=12299933']
 * 
 */

var dictionariesAndMaps = function dictionariesAndMaps(n, phoneNumbersString, queries) {
  var inputArray = phoneNumbersString.split('\n');
  var phoneBook = {};
  var namePhoneArray = [];
  var result = [];

  for (var i = 0; i < n; i++) {
    namePhoneArray = inputArray[i].split(' ');
    phoneBook[ namePhoneArray[0] ] = namePhoneArray[1];
  }
  
  for (var j = 0; j < queries.length; j++) {
    if ( phoneBook[ queries[j] ] ) {
      result.push( queries[j] + '=' + phoneBook[ queries[j] ] );
    } else {
      result.push('Not found');
    }
  }

  return result;
};