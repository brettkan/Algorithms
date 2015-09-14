/* 

Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.

ex.

var arr = [−10,−10,1,3,2];
highestProduct(arr) // should return 300

*/

var highestProduct = function(arrayOfInts) {
  var highestNumber = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];

  var lowestNumber = Math.min(arrayOfInts[0], arrayOfInts[1]);
  var lowestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];

  var highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (var i = 2; i < arrayOfInts.length; i++) {
    var current = arrayOfInts[i];

    highestProductOfThree = Math.max(highestProductOfThree, lowestProductOfTwo * current, highestProductOfTwo * current);

    highestProductOfTwo = Math.max(highestProductOfTwo, highestNumber * current, lowestNumber * current);
    lowestProductOfTwo = Math.min(lowestProductOfTwo, highestNumber * current, lowestNumber * current);

    highestNumber = Math.max(highestNumber, current);
    lowestNumber = Math.min(lowestNumber, current);
  }

  return highestProductOfThree;
};
