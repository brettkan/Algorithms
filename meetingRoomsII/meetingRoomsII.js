/*

Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Example 2:

Input: [[7,10],[2,4]]
Output: 1

*/


/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // Get sorted list of starts and ends
    const starts = []
    const ends = []

    for (let interval of intervals) {
        starts.push(interval.start)
        ends.push(interval.end)
    }

    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)

    // get max simultaneous meetings
    let currentMeetings = 0
    let maxMeetings = 0
    while (starts.length) {
        // next event is a meeting start
        if (starts[0] < ends[0]) {
            currentMeetings++
            starts.shift()
            maxMeetings = Math.max(currentMeetings, maxMeetings)
        } else {
            // next event is a meeting end
            currentMeetings--
            ends.shift()
        }
    }

    return maxMeetings
};


/**
 * HELPERS
 **/

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

function createIntervals(arr) {
    return arr.map(([start, end]) => new Interval(start, end))
}


/**
 * TEST CASES
 **/

console.log(minMeetingRooms(createIntervals([[0, 30],[5, 10],[15, 20]])), 'and output should be 2')
console.log(minMeetingRooms(createIntervals([[7,10],[2,4]])), 'and output should be 1')





