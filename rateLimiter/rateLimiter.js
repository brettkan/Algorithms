/* 

Create a class called RateLimiter that accepts parameters N and Q. RateLimiter should have a Check 
function that checks whether the function has been called N times in the last Q seconds. If it has, 
it should return true, and false otherwise.

Ex.: var rl = new RateLimiter(3, 2); // N=3, Q=2 
rl.check(); //false 
rl.check(); //false
rl.check(); //true
setTimeout(function() { 
  rl.check(); //false 
  rl.check(); //false
  rl.check(); //true
}, 2300);

*/

var RateLimiter = function(N, Q) {
  this.checkLimit = N;
  this.checkInterval = Q * 1000;  // In milliseconds
  this.storage = [];
};

RateLimiter.prototype.check = function() {
  var date = new Date();
  this.storage.push(date);
  var currentIndex = this.storage.length - 1;
  var compareIndex = this.storage.length - this.checkLimit;

  if (this.storage.length < this.checkLimit) {
    return false;
  }

  if (this.storage[currentIndex] - this.storage[compareIndex] > this.checkInterval) {
    return false;
  }

  return true;
};
