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
  if (strings.length === 0) {
    return '';
  }  

  if (strings.length === 1) {
    return strings[0];
  }

  return strings.reduce(function(aggregator, iterator) {
    return checkCommonPrefix(aggregator, iterator);
  });
};

