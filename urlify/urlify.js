/*
 *
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string has
 * sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you
 * can perform this operation in place.)
 *
 * Example:
 *   Input: 'Mr John Smith    ', 13
 *   Output: 'Mr%20John%20Smith'
 * 
 */

var urlify = function urlify(string, trueLength) {
  var fillIndex = string.length - 1;
  var resultArray = string.split('');

  for (var lookupIndex = trueLength - 1; lookupIndex >= 0; lookupIndex--) {
    if (resultArray[lookupIndex] === ' ') {
      resultArray[fillIndex] = '0';
      resultArray[fillIndex - 1] = '2';
      resultArray[fillIndex - 2] = '%';

      fillIndex -= 3;
    } else {
      resultArray[fillIndex--] = resultArray[lookupIndex];
    }
  }

  return resultArray.join('');
};
