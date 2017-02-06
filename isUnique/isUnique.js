/*
 *
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * 
 */

var isUnique = function isUnique(string) {
  if (string.length === 0) { return null; }
  
  var charMap = {};

  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);

    if (charMap[char]) { return false; }
    charMap[char] = true;
  }

  return true;
};
