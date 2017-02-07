/*
 *
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome
 * is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of
 * letters. The palindrome does not need to be limited to just dictionary words.
 *
 * Example:
 *   Input:
 *     'Tact Coa'
 *   Output:
 *     True (permutations: 'taco cat', 'acto cta', etc.)
 * 
 */

var palindromePermutation = function palindromePermutation(string) {
  // iterate through string
  // map character counts
  // if all or all but one counts are even return true, otherwise false

  var map = {};
  var oddCounts = 0;
  var char = '';

  for (var i = 0; i < string.length; i++) {
    char = string.charAt(i).toLowerCase();

    if (char !== ' ') {
      map[char] = map[char] ? map[char] + 1 : 1;
    }
  }

  for (var key in map) {
    oddCounts = map[key] % 2 === 0 ? oddCounts : oddCounts + 1;
  }

  return string.length > 0 && oddCounts < 2;
};
