/*
 *
 * Given two strings, write a method to decide if one is a permutation of the other.
 * 
 */

var checkPermutation = function checkPermutation(str1, str2) {
  if (str1.length !== str2.length || str1.length === 0) {
    return false;
  }

  var str1Map = {};
  var charToMap = '';
  var charToCheck = '';

  for (var i = 0; i < str1.length; i++) {
    charToMap = str1.charAt(i);

    str1Map[charToMap] = str1Map[charToMap] ? str1Map[charToMap] + 1 : 1;
  }

  for (var i = 0; i < str2.length; i++) {
    charToCheck = str2.charAt(i);

    if (!str1Map[charToCheck]) {
      return false;
    }

    str1Map[charToCheck]--;
  }

  return true;
};
