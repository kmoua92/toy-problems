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

var reverseWord = function reverseWord(array, startIndex, endIndex) {
  // initialize step to be 0
  var step = 0;
  // initialize leftValue to be null
  var leftValue = null;
  // while startIndex plus step is less than endIndex minus step
  while (startIndex + step < endIndex - step) {
    // set leftValue to value at startIndex plus step
    leftValue = array[startIndex + step];
    // set value at startIndex plus step to equal value at endIndex minus step
    array[startIndex + step] = array[endIndex - step];
    // set value at endIndex minus step to equal leftValue
    array[endIndex - step] = leftValue;
    // increment step by 1
    step++;
  }
};

var sentenceReverse = function sentenceReverse(array) {
  // reverse entire array
  array = array.reverse();
  // initialize inWord variable with false
  var inWord = false;
  // initialize startIndex with null
  var startIndex = null;
  // initialize endIndex with null
  var endIndex = null;
  // loop through reversed array
  for (var i = 0; i < array.length; i++) {
    // if current character is a non-space
    if (/[^ ]+/.test(array[i])) {
      // if inWord is false
      if (!inWord) {
        // toggle inWord
        inWord = !inWord;
        // set startIndex to current index
        startIndex = i;
        // set endIndex to current index
        endIndex = i;
      // else
      } else {
        // set endIndex to current index
        endIndex = i;
        // if last item in array
        if (i === array.length - 1) {
          // reverse word
          reverseWord(array, startIndex, endIndex);
        }
      }
    // else
    } else {
      // if inWord is true
      if (inWord) {
        // toggle inWord
        inWord = !inWord;
        // reverse word
        reverseWord(array, startIndex, endIndex);
        // set startIndex to null
        startIndex = null;
        // set endIndex to null
        endIndex = null;
      }
    }
  }
  // return array
  return array;
};
