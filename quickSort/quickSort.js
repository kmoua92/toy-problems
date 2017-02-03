/*
 *
 * Implement a quick sort function.
 *
 * Learn more here: https://en.wikipedia.org/wiki/Quicksort
 * 
 */

var swap = function swap(array, left, right) {
  // initialize tempValue with value at left
  // set value at left equal to value at right
  // set value at right to tempValue
};

var partition = function partition(array, left, right) {
  // initialize middle variable
  // initialize middleValue variable
  // initialize leftValue variable
  // initiallize rightValue variable
  // while left is less than or equal to right
    // while leftValue is less than middleValue
      // increment left by 1
      // set new leftValue
    // while rightValue is greater than middleValue
      // decrement right by 1
      // set new rightValue
    // if left is less than or equal to right
      // swap leftValue and rightValue
  // return middle
};

var quickSort = function quickSort(array, left, right) {
  // set left equal to 0 if no left
  // set right equal to last index of array if no right
  // if array length is greater than 1
    // initialize pivot to partition invocation
    // if left is less than pivot minus 1
      // invoke quickSort with array, left, and index - 1
    // if right is greater than pivot plus 1
      // invoke quickSort with array, index + 1, right
  // return array
};
