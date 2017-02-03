/*
 *
 * Implement a quick sort function.
 *
 * Learn more here: https://en.wikipedia.org/wiki/Quicksort
 * 
 */

var swap = function swap(array, left, right) {
  // initialize tempValue with value at left
  var tempValue = array[left];
  // set value at left equal to value at right
  array[left] = array[right];
  // set value at right to tempValue
  array[right] = tempValue;
};

var partition = function partition(array, left, right) {
  // initialize middleValue variable
  var middleValue = array[Math.floor((left + right) / 2)];
  // while left is less than or equal to right
  while (left <= right) {
    // while leftValue is less than middleValue
    while (array[left] < middleValue) {
      // increment left by 1
      left++;
    }
    // while rightValue is greater than middleValue
    while (array[right] > middleValue) {
      // decrement right by 1
      right--;
    }
    // if left is less than or equal to right
    if (left <= right) {
      // swap leftValue and rightValue
      swap(array, left, right);
      left++;
      right--;
    }
    
  }
  // return left
  return left;
};

var quickSort = function quickSort(array, left, right) {
  // set left equal to 0 if no left
  left = left || 0;
  // set right equal to last index of array if no right
  right = right || array.length - 1;
  // if array length is greater than 1
  if (array.length > 1) {
    // initialize pivot to partition invocation
    var pivot = partition(array, left, right);
    // if left is less than pivot minus 1
    if (left < pivot - 1) {
      // invoke quickSort with array, left, and pivot - 1
      quickSort(array, left, pivot - 1);
    }
    // if right is greater than pivot plus 1
    if (right > pivot) {
      // invoke quickSort with array, pivot + 1, right
      quickSort(array, pivot, right);
    }
  }
  // return array
  return array;
};
