/*
 * Given a square matrix of N x N size , calculate the absolute difference between the sums of
 * its diagonals.
 *
 * Example:
 * var matrix = [
 *   [11, 2, 4],
 *   [4, 5, 6],
 *   [10, 8, -12]
 * ];
 *
 * // primaryDiagonalSum = 11 + 5 + (-12);
 * // secondaryDiagonalSum = 4 + 5 + 10;
 *
 * diagonalDifference(matrix); // returns 15
 * 
 */

var diagonalDifference = function diagonalDifference(matrix) {
  var primaryIndex = 0;
  var secondaryIndex = matrix.length - 1;
  var primarySum = 0;
  var secondarySum = 0;

  for (var i = 0; i < matrix.length; i++) {
    primarySum += matrix[i][primaryIndex];
    secondarySum += matrix[i][secondaryIndex];
    primaryIndex++;
    secondaryIndex--;
  }

  return Math.abs(primarySum - secondarySum);
};