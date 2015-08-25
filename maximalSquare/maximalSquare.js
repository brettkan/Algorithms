/* 

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Return 4.

*/

var checkSquare = function(matrix, row, column, length) {
  var top = row;
  var bottom = row + length - 1;
  var left = column;
  var right = column + length - 1;

  if (bottom >= matrix.length - 1 || right >= matrix[0].length - 1 || matrix[top][left] !== 1 || matrix[bottom + 1][right + 1] !== 1) {
    return Math.pow(length, 2);
  }

  for (var verticalCoord = top; verticalCoord <= bottom; verticalCoord++) {
    if (matrix[verticalCoord][right + 1] !== 1) {
      return Math.pow(length, 2);
    }
  }

  for (var horizontalCoord = left; horizontalCoord <= right; horizontalCoord++) {
    if (matrix[bottom + 1][horizontalCoord] !== 1) {
      return Math.pow(length, 2);
    }
  }

  return checkSquare(matrix, row, column, length + 1);
};

var maximalSquare = function(matrix) {
  var height = matrix.length;
  var width = matrix[0].length;
  var maxArea = 1;

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      maxArea = Math.max(maxArea, checkSquare(matrix, i, j, 1));
    }
  }

  return maxArea;
};

