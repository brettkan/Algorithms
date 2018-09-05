/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is
surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You
may assume all four edges of the grid are all surrounded by water.


Example 1:

Input:
11110
11010
11000
00000

Output: 1


Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const disjointSet = populateDisjointSet(grid)
    return disjointSet.count
};

function populateDisjointSet(grid) {
    const disjointSet = new DisjointSet()

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            if (grid[row][column] === '1') {
                disjointSet.find(getStringCoord(row, column))

                if (grid[row][column + 1] && grid[row][column + 1] === '1') {
                    disjointSet.union(getStringCoord(row, column), getStringCoord(row, column + 1))
                }

                if (grid[row + 1] && grid[row + 1][column] === '1') {
                    disjointSet.union(getStringCoord(row, column), getStringCoord(row + 1, column))
                }
            }
        }
    }

    return disjointSet
}

function getStringCoord(row, column) {
    return row.toString() + column.toString()
}

class DisjointSet {
    constructor() {
        this.parent = {}
        this.count = 0
    }

    find(item) {
        if (!this.parent[item]) {
            this.parent[item] = item
            this.count++
        }

        if (this.parent[item] !== item) {
            this.parent[item] = this.find(this.parent[item])
        }

        return this.parent[item]
    }

    union(a, b) {
        if (this.find(a) === this.find(b)) {
            return false
        }

        this.parent[this.find(a)] = this.find(b)
        this.count--
        return true
    }
}

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(numIslands([
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]), 'and the answer is 1')

console.log(numIslands([
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]), 'and the answer is 3')
