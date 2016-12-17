/*
 * Source: https://www.hackerrank.com/challenges/ctci-array-left-rotation
 * 
 * A left rotation operation on an array of size shifts each of the array's elements 1 unit to
 * the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the
 * array would become [3, 4, 5, 1, 2].
 * 
 * Given an array of integers and a number, d, perform d left rotations on the array.
 * Then return the updated array.
 *
 * Constraints:
 * The length of the array will be at least 1.
 * The value of d will be at least 1 and less than or equal to the length of the array.
 * 
 */

var leftRotation = function leftRotation(array, d) {
  var result = [];
  var n = array.length;

  array.forEach(function (number, index) {
    var newIndex = index - d < 0 ? index - d + n : index - d;

    result[newIndex] = number;
  });

  return result;
};
