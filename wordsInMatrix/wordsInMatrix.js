/* 

Given a dictionary, and a matrix of letters, find all the words in the 
matrix that are in the dictionary. (Going across, down or diagonally).


var dictionary = {
  house: true,
  brand: true,
  bros: true,
  man: true,
  on: true,
  cry: true,
  urn: true,
  ball: false,
  crow: false
}

var matrix = [
  ['b', 'b', 'c', 'h'],
  ['u', 'r', 'n', 'o'],
  ['y', 'a', 'o', 'u'],
  ['m', 'n', 'o', 's'],
  ['q', 'd', 's', 'e']
]

*/

var wordsInMatrix = function(dictionary, matrix) {
  var matrixColumns = matrix.length;
  var matrixRows = matrix[0].length;
  var result = {};

  var checkRight = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startRow; i < matrixRows; i++) {
      wordBuild += matrix[startColumn][i];
      if (wordBuild in dictionary) {
        result[wordBuild] = true;
      }
    }
  };

  var checkLeft = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startRow; i >= 0; i--) {
      wordBuild += matrix[startColumn][i];
      if (wordBuild in dictionary) {
        result[wordBuild] = true;
      }
    }
  };

  var checkDown = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startColumn; i < matrixColumns; i++) {
      wordBuild += matrix[i][startRow];
      if (wordBuild in dictionary) {
        result[wordBuild] = true;
      }
    }
  };

  var checkUp = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startColumn; i >= 0; i--) {
      wordBuild += matrix[i][startRow];
      if (wordBuild in dictionary) {
        result[wordBuild] = true;
      }
    }
  };

  for (var i = 0; i < matrixColumns; i++) {
    for (var j = 0; j < matrixRows; j++) {
      checkRight(i, j);
      checkLeft(i, j);
      checkDown(i, j);
      checkUp(i, j);
    }
  }

  return result;
};
