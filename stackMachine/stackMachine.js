/* 



*/

function solution(S) {
  // write your code in JavaScript (Node.js 0.12)
  var stack = [];
  
  for (var i = 0; i < S.length; i++) {
    var current = S[i];

    if (isDigit(current)) {
      stack.push(Number(current));
    } else if (current === '+') {
      if (stack.length < 2) { return -1; }
      stackAdd(stack);
    } else if (current === '*') {
      if (stack.length < 2) { return -1; }
      stackMultiply(stack);
    }    
  }

  if (stack.length < 1) {
    return -1;
  }

  return stack[stack.length - 1];
}

var isDigit = function(str) {
  return str.match(/[0-9]/) ? true : false;
};

/*
  As I understand it, numbers in JavaScript are essentially always stored as 64-bit floating point values.
  As such, I do not believe that there is a way to limit the add and multiply operations to being 
  12-bit unsigned integers.  If we wanted to limit the stackAdd and stackMultiply functions to a certain value,
  we could add an if statement to check the result of the operation before pushing the resulting value
  back into the stack.
*/

var stackAdd = function(arr) {
  var last = arr.pop();
  var secondLast = arr.pop();

  arr.push(last + secondLast);
};

var stackMultiply = function(arr) {
  var last = arr.pop();
  var secondLast = arr.pop();

  arr.push(last * secondLast);
};
