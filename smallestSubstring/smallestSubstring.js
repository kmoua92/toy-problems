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
  // initialize a currentMap object with every character in arr as keys with values of 0
  // initialize shortestValidSubstring to null
  // initialize uniqueCharCount to 0
  // initialize tailIndex to 0
  // loop from headIndex 0 to str length - 1
    // if current character at headIndex is in currentMap
      // if value associated with current character key in currentMap is 0
        // increment uniqueCharCount by 1
      // increment value associated with current character key in currentMap
      // while uniqueCharCount is equal to arr length
        // initialize currentLength variable to length between headIndex and tailIndex
        // if currentLength is equal to arr length
          // return substring between headIndex and tailIndex
        // if shortestValidSubstring is null or currentLength is less than shortestValidSubstring length
          // set shortestValidSubstring to substring between headIndex and tailIndex
        // initialize tailChar to the character at tailIndex
        // if tailChar is in currentMap and its associated value is 1
          // decerement uniqueCharCount by 1
        // increment tailIndex by 1
};
