/* 

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.

*/

var nthUglyNumber = function(n) {
  var uglyNumbers = [];
  var counter = 1;

  while (uglyNumbers.length < n) {
    if (checkUglyNumber(counter)) {
      uglyNumbers.push(counter);
    }

    counter++;
  }

  return uglyNumbers[uglyNumbers.length - 1];
};

var checkUglyNumber = function(n) {
  if (n === 1) {
    return true;
  }

  if (n % 2 === 0) {
    return checkUglyNumber(n / 2);
  }

  if (n % 3 === 0) {
    return checkUglyNumber(n / 3);
  }

  if (n % 5 === 0) {
    return checkUglyNumber(n / 5);
  }

  return false;
};

