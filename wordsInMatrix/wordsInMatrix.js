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

  var lookupDictionary = function(str) {
    if (str in dictionary) {
      result[str] = true;
    }
  };

  var checkRight = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startRow; i < matrixRows; i++) {
      wordBuild += matrix[startColumn][i];
      lookupDictionary(wordBuild);
    }
  };

  var checkLeft = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startRow; i >= 0; i--) {
      wordBuild += matrix[startColumn][i];
      lookupDictionary(wordBuild);
    }
  };

  var checkDown = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startColumn; i < matrixColumns; i++) {
      wordBuild += matrix[i][startRow];
      lookupDictionary(wordBuild);
    }
  };

  var checkUp = function(startColumn, startRow) {
    var wordBuild = '';

    for (var i = startColumn; i >= 0; i--) {
      wordBuild += matrix[i][startRow];
      lookupDictionary(wordBuild);
    }
  };

  var checkDownRight = function(startColumn, startRow) {
    var wordBuild = '';
    var remainingLetters = Math.min(matrixColumns - startColumn, matrixRows - startRow);

    for (var i = 0; i < remainingLetters; i++) {
      wordBuild += matrix[startColumn + i][startRow + i];
      lookupDictionary(wordBuild);
    }
  };

  var checkDownLeft = function(startColumn, startRow) {
    var wordBuild = '';
    var remainingLetters = Math.min(matrixColumns - startColumn, startRow + 1);

    for (var i = 0; i < remainingLetters; i++) {
      wordBuild += matrix[startColumn + i][startRow - i];
      lookupDictionary(wordBuild);
    }
  };

  var checkUpRight = function(startColumn, startRow) {
    var wordBuild = '';
    var remainingLetters = Math.min(startColumn + 1, matrixRows - startRow);

    for (var i = 0; i < remainingLetters; i++) {
      wordBuild += matrix[startColumn - i][startRow + i];
      lookupDictionary(wordBuild);
    }
  };

  var checkUpLeft = function(startColumn, startRow) {
    var wordBuild = '';
    var remainingLetters = Math.min(startColumn + 1, startRow + 1);

    for (var i = 0; i < remainingLetters; i++) {
      wordBuild += matrix[startColumn - i][startRow - i];
      lookupDictionary(wordBuild);
    }
  };

  for (var i = 0; i < matrixColumns; i++) {
    for (var j = 0; j < matrixRows; j++) {
      checkRight(i, j);
      checkLeft(i, j);
      checkDown(i, j);
      checkUp(i, j);
      checkDownRight(i, j);
      checkDownLeft(i, j);
      checkUpRight(i, j);
      checkUpLeft(i, j);
    }
  }

  return result;
};
