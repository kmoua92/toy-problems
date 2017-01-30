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
  var currentMap = arr.reduce(function(map, char) {
    map[char] = 0;
    return map;
  }, {});
  // initialize shortestValidSubstring to null
  var shortestValidSubstring = null;
  // initialize uniqueCharCount to 0
  var uniqueCharCount = 0;
  // initialize tailIndex to 0
  var tailIndex = 0;
  // loop from headIndex 0 to str length - 1
  for (var headIndex = 0; headIndex < str.length; headIndex++) {
    var currentChar = str.charAt(headIndex);
    // if current character at headIndex is in currentMap
    if (currentMap.hasOwnProperty(currentChar)) {
      // if value associated with current character key in currentMap is 0
      if (currentMap[currentChar] === 0) {
        // increment uniqueCharCount by 1
        uniqueCharCount++;
      }
      // increment value associated with current character key in currentMap
      currentMap[currentChar]++;
      // while uniqueCharCount is equal to arr length
      while (uniqueCharCount === arr.length) {
        // initialize currentLength variable to length between headIndex and tailIndex
        var currentLength = headIndex - tailIndex + 1;
        // if currentLength is equal to arr length
        if (currentLength === arr.length) {
          // return substring between headIndex and tailIndex
          return str.slice(tailIndex, headIndex + 1);
        }
        // if shortestValidSubstring is null or currentLength is less than shortestValidSubstring length
        if (!shortestValidSubstring || currentLength < shortestValidSubstring.length) {
          // set shortestValidSubstring to substring between headIndex and tailIndex
          shortestValidSubstring = str.slice(tailIndex, headIndex + 1);
        }
        // initialize tailChar to the character at tailIndex
        var tailChar = str.charAt(tailIndex);
        // if tailChar is in currentMap and its associated value is 1
        if (currentMap.hasOwnProperty(tailChar) && currentMap[tailChar] === 1) {
          // decerement uniqueCharCount by 1
          uniqueCharCount--;
          // decrement value associated with tailChar key in currentMap
          currentMap[tailChar]--;
        }
        // increment tailIndex by 1
        tailIndex++;
      }
    }
  }
};
