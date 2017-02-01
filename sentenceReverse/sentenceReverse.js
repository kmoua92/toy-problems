/*
 *
 * You are given an array of characters arr, which consists of sequences of characters separated by
 * space characters. Each space-delimited sequence of characters defines a word.
 * 
 * How can you most efficiently reverse the order of the words in the array?
 * Explain and implement your solution. Lastly, analyze its time and space complexities.
 * 
 * For example:
 * [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
 * 
 * would turn into:
 * [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]
 * 
 */

var sentenceReverse = function sentenceReverse(array) {
  // reverse entire array
  // initialize inWord variable with false
  // initialize startIndex with null
  // initialize endIndex with null
  // loop through reversed array
    // if current character is a non-space
      // if inWord is false
        // toggle inWord
        // set startIndex to current index
        // set endIndex to current index
      // else
        // set endIndex to current index
    // else
      // if inWord is true
        // toggle inWord
        // reverse word
        // set startIndex to null
        // set endIndex to null
  // return array
};
