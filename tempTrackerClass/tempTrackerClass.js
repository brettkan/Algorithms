/* 

Write a class TempTracker with these methods:

insert()—records a new temperature
get_max()—returns the highest temp we've seen so far
get_min()—returns the lowest temp we've seen so far
get_mean()—returns the mean ↴ of all temps we've seen so far
get_mode()—returns the mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the get_ functions over speeding up the insert() function.

get_mean() should return a float, but the rest of the get_ functions can return integers. 
Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, 
so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.

*/

var TempTracker = function() {
  this.maxTemp = null;
  this.minTemp = null;
  this.meanTemp = null;
  this.modeTemp = null;

  this.tempCount = 0;

  this.tempStore = {};
  this.modeCount = 0;
};

TempTracker.prototype.insert = function(temp) {
  // Update max temp
  if (temp > this.maxTemp || this.maxTemp === null) {
    this.maxTemp = temp;
  }

  // Update min temp
  if (temp < this.minTemp || this.minTemp === null) {
    this.minTemp = temp;
  }

  // Update mean
  if (this.meanTemp !== null) {
    var tempProduct = this.tempCount * this.meanTemp;
    this.meanTemp = (tempProduct + temp) / (this.tempCount + 1);
  } else {
    this.meanTemp = temp;
  }
  this.tempCount++;

  // Update mode
  this.tempStore[temp] = this.tempStore[temp] + 1 || 1;
  if (this.tempStore[temp] > this.modeCount) {
    this.modeTemp = temp;
    this.modeCount = this.tempStore[temp];
  }
};

TempTracker.prototype.getMax = function() {
  return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
  return this.minTemp;
};

TempTracker.prototype.getMean = function() {
  return this.meanTemp;
};

TempTracker.prototype.getMode = function() {
  return this.modeTemp;
};
