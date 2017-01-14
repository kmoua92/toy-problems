/*
 *
 * A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.
 * 
 * Given a sorted array of distinct integers, write a method to find a magic index, if one exists,
 * in array A. Return the magic index or -1 if there isn't one.
 *
 * Extra credit: What if the values are not distinct?
 * 
 */

var magicIndex = function magicIndex(array) {
  var middleIndex = Math.floor(array.length / 2);
  if (middleIndex === array[middleIndex]) { return middleIndex; }
  if (middleIndex > array[middleIndex]) { return magicIndex( array.slice(middleIndex + 1) ); }
  return magicIndex( array.slice(0, middleIndex) );
};
