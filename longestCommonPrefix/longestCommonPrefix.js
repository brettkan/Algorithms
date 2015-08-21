/* 

Write a function to find the longest common prefix string amongst an array of strings.

*/


var checkCommonPrefix = function(str1, str2) {
  var commonPrefix = '';

  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      commonPrefix += str1[i];
    } else {
      break;
    }
  }

  return commonPrefix;
};

var longestCommonPrefix = function(strings) {
  var longest = '';

  for (var i = 0; i < strings.length; i++) {
    for (var j = i + 1; j < strings.length; j++) {
      var common = checkCommonPrefix(strings[i], strings[j]);
      if (common.length > longest.length) {
        longest = common;
      }
    }
  }

  return longest;
};

