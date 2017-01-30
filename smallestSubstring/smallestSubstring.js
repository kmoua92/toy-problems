/*
 *
 * Given an array with unique characters arr and a string str, find the smallest substring of str
 * containing all characters of arr.
 * 
 * Example:
 *   arr: [x,y,z], str: 'xyyzyzyx'
 *   result: 'zyx'
 * 
 */

var smallestSubstring = function smallestSubstring(arr, str) {
  // initialize a currentMap object with every character in arr as keys with values of false
  // initialize shortestValidSubstring to ''
  // initialize uniqueCharCount to 0
  // initialize tailIndex to 0
  // initialize headIndex to arr length - 1
  // initialize currentIndex to 0
  // while headIndex is less than str length and tailIndex is less than str length minus arr length
    // loop through str from tailIndex to headIndex
      // if currentChar in currentMap
        // if currentMap[currentChar] is false
          // increment uniqueCharCount
        // set currentMap[currentChar] to true
    // if uniqueCharCount equals arr length and substring between headIndex and tailIndex is less than shortestValidSubstring length
      // set shortestValidSubstring to substring between headIndex and tailIndex
    // else
      // while uniqueCharCount is less than arr length
        // increment headIndex
        // if currentChar
    // increment tailIndex
};
