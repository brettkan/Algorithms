/* 

Write a function to find the rectangular intersection of two given rectangles.

  rect1 = {
    // coordinates of bottom-left corner:
    'x': 2,
    'y': 6,

    // width and height
    'width': 11,
    'height': 5,
  }

  rect2 = {
    // coordinates of bottom-left corner:
    'x': 10,
    'y': 8,

    // width and height
    'width': 5,
    'height': 4,
  }

  rectangularIntersection(rect1, rect2); // Should return 9
*/

var rectangularIntersection = function(rect1, rect2) {
  var rect1Left = rect1.x;
  var rect1Right = rect1Left + rect1.width;
  var rect1Bottom = rect1.y;
  var rect1Top = rect1Bottom + rect1.height;

  var rect2Left = rect2.x;
  var rect2Right = rect2Left + rect2.width;
  var rect2Bottom = rect2.y;
  var rect2Top = rect2Bottom + rect2.height;

  var horizontalOverlap;
  var verticalOverlap;

  if (rect1Left >= rect2Right || rect1Right <= rect2Left || rect1Top <= rect2Bottom || rect1Bottom >= rect2Top) {
    return 0;
  }

  horizontalOverlap = Math.min(rect1Right, rect2Right) - Math.max(rect1Left, rect2Left);
  verticalOverlap = Math.min(rect1Top, rect2Top) - Math.max(rect1Bottom, rect2Bottom);

  return horizontalOverlap * verticalOverlap;
};


