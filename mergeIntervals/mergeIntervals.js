/*

Given a collection of intervals, merge all overlapping intervals.


Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

*/

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a.start - b.start)

    for (let i = 0; i < sortedIntervals.length - 1; i++) {
        let current = sortedIntervals[i]
        let next = sortedIntervals [i + 1]

        const merged = getMergedInterval(current, next)
        if (merged) {
            sortedIntervals.splice(i, 2, merged)
            i--
        }
    }

    return intervals
};

function getMergedInterval(a, b) {
    // If a is fully surrounded by b
    if (a.start >= b.start && a.end <= b.end) {
        return new Interval(b.start, b.end)
    }

    // if b is fully surrounded by a
    if (b.start >= a.start && b.end <= a.end) {
        return new Interval(a.start, a.end)
    }

    // if a and b interlap, with b before a
    if (a.start >= b.start && a.start <= b.end) {
        return new Interval(b.start, a.end)
    }

    // if a and b interlap, with a before b
    if (a.end >= b.start && a.end <= b.end) {
        return new Interval(a.start, b.end)
    }

    return false
}

/**
 * HELPERS
 **/

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

function makeIntervals(arr) {
    return arr.map(([beg, end]) => new Interval(beg, end))
}

/**
 * TEST CASES
 **/

console.log(merge(makeIntervals([[1,4],[0,2],[3,5]])), 'and the answer is [[0,5]]')
console.log(merge(makeIntervals([[1,3],[2,6],[8,10],[15,18]])), 'and the answer is [[1,6],[8,10],[15,18]]')
console.log(merge(makeIntervals([[1,3],[14,19],[8,10],[2,6],[15,18]])), 'and the answer is [[1,6],[8,10],[14,19]]')
console.log(merge(makeIntervals([[1,4],[4,5]])), 'and the answer is [[1,5]]')
