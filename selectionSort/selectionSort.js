/*
 *
 * Create a sorting function that uses a selection sort strategy.
 * 
 * The input for the function should be an array (possibly alreadly sorted), and the output should
 * be a sorted array.
 *
 * For more information, visit: https://en.wikipedia.org/wiki/Selection_sort
 * 
 */

var selectionSort = function selectionSort(array) {
  // store sortedSubarray and unsortedSubarray variables
  var sortedSubarray = [];
  var unsortedSubarray = array.slice();
  // while length of sortedSubarray is less than length of array
  while (sortedSubarray.length < array.length) {
    // loop through unsortedSubarray
    var currentSmallest = unsortedSubarray.reduce(function(smallest, currentValue, currentIndex) {
      // if currentValue is null or is less than smallest return currentValue
      return smallest === null || currentValue < smallest[0] ? [currentValue, currentIndex] : smallest; 
    }, null);
    // append currentSmallest to sortedSubarray
    sortedSubarray.push(currentSmallest[0]);
    // remove currentSmallest from unsortedSubarray
    unsortedSubarray.splice(currentSmallest[1], 1);
  }
  // return sortedSubarray
  return sortedSubarray;
};
