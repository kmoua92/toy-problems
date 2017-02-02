/*
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or
 * vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Example #1:
 * Matrix:
 * [[1, 1, 1, 1, 0]
 *  [1, 1, 0, 1, 0]
 *  [1, 1, 0, 0, 0]
 *  [0, 0, 0, 0, 0]]
 * Produces: 1
 *
 * Example #2:
 * Matrix:
 * [[1, 1, 0, 0, 0]
 *  [1, 1, 0, 0, 0]
 *  [0, 0, 1, 0, 0]
 *  [0, 0, 0, 1, 1]]
 * Produces: 3
 * 
 */

var checkIfInbounds = function checkIfInbounds(maxRowIndex, maxColIndex, rowIndex, colIndex) {
  return rowIndex >= 0 && colIndex >= 0 && rowIndex <= maxRowIndex && colIndex <= maxColIndex;
};

var toggleAdjacentIslands = function toggleAdjacentIslands(matrix, startRow, startCol) {
  // initialize maxRowIndex
  var maxRowIndex = matrix.length - 1;
  // initialize maxColIndex
  var maxColIndex = matrix[0].length - 1;
  // check if location above has value of 1
  if (checkIfInbounds(maxRowIndex, maxColIndex, startRow - 1, startCol) && matrix[startRow - 1][startCol] === 1) {
    // toggle value to 0
    matrix[startRow - 1][startCol] = 0;
    // check adjacent values for 1s and toggle them
    toggleAdjacentIslands(matrix, startRow - 1, startCol);
  }
  // check if location below has value of 1
  if (checkIfInbounds(maxRowIndex, maxColIndex, startRow + 1, startCol) && matrix[startRow + 1][startCol] === 1) {
    // toggle value to 0
    matrix[startRow + 1][startCol] = 0;
    // check adjacent values for 1s and toggle them
    toggleAdjacentIslands(matrix, startRow + 1, startCol);
  }
  // check if location left has value of 1
  if (checkIfInbounds(maxRowIndex, maxColIndex, startRow, startCol - 1) && matrix[startRow][startCol - 1] === 1) {
    // toggle value to 0
    matrix[startRow][startCol - 1] = 0;
    // check adjacent values for 1s and toggle them
    toggleAdjacentIslands(matrix, startRow, startCol - 1);
  }
  // check if location right has value of 1
  if (checkIfInbounds(maxRowIndex, maxColIndex, startRow, startCol + 1) && matrix[startRow][startCol + 1] === 1) {
    // toggle value to 0
    matrix[startRow][startCol + 1] = 0;
    // check adjacent values for 1s and toggle them
    toggleAdjacentIslands(matrix, startRow, startCol + 1);
  }
};

var numberOfIslands = function numberOfIslands(matrix) {
  // intialize islandCount variable to 0
  var islandCount = 0;
  // loop through each row
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    // loop through each column
    for (var colIndex = 0; colIndex < matrix[0].length; colIndex++) {
      // if value at current location is 1
      if (matrix[rowIndex][colIndex] === 1) {
        // increment islandCount by 1
        islandCount++;
        // toggle value to 0
        matrix[rowIndex][colIndex] = 0;
        // check adjacent values for 1s and toggle them
        toggleAdjacentIslands(matrix, rowIndex, colIndex);
      }
    }
  }
  // return islandCount
  return islandCount;
};
