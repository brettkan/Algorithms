/*

We have a grid of 1s and 0s; the 1s in a cell represent bricks.  A brick will not drop if and only if it is
directly connected to the top of the grid, or at least one of its (4-way) adjacent bricks will not drop.

We will do some erasures sequentially. Each time we want to do the erasure at the location (i, j), the brick
(if it exists) on that location will disappear, and then some other bricks may drop because of that erasure.

Return an array representing the number of bricks that will drop after each erasure in sequence.

Example 1:
Input:
grid = [[1,0,0,0],[1,1,1,0]]
hits = [[1,0]]
Output: [2]
Explanation:
If we erase the brick at (1, 0), the brick at (1, 1) and (1, 2) will drop. So we should return 2.

Example 2:
Input:
grid = [[1,0,0,0],[1,1,0,0]]
hits = [[1,1],[1,0]]
Output: [0,0]
Explanation:
When we erase the brick at (1, 0), the brick at (1, 1) has already disappeared due to the last move. So each
erasure will cause no bricks dropping.  Note that the erased brick (1, 0) will not be counted as a dropped brick.


Note:

The number of rows and columns in the grid will be in the range [1, 200].
The number of erasures will not exceed the area of the grid.
It is guaranteed that each erasure will be different from any other erasure, and located inside the grid.
An erasure may refer to a location with no brick - if it does, no bricks drop.

*/


/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
function hitBricks(grid, hits) {
    let currentGrid = grid
    let droppedBricks = 0
    hits.forEach(hit => {
        const hitHelper = new HitHelper(currentGrid)
        hitHelper.hitBrick(hit)
        currentGrid = hitHelper.grid
        droppedBricks += hitHelper.fallenBricks
    })

    return droppedBricks ? [droppedBricks] : [0, 0]
};

// const gridCache = {}

class HitHelper {
    constructor(grid) {
        // "deep" copy of grid
        this.grid = grid.map(column => {
            return [...column]
        })
        this.fallenBricks = 0
    }

    hitBrick(hit) {
        if (!this.grid[hit[0]][hit[1]]) {
            return false
        }

        this.grid[hit[0]][hit[1]] = 0

        const placesToCheck = [
            [hit[0] - 1, hit[1]],
            [hit[0], hit[1] + 1],
            [hit[0] + 1, hit[1]],
            [hit[0], hit[1] - 1]
        ]

        for (let i = 0; i < placesToCheck.length; i++) {
            let nextHit = placesToCheck[i]
            if (this.existsInGrid(nextHit)) {            
                let checkHelper = new CheckGridHelper(this.grid)
                let isConnected = checkHelper.checkConnected(nextHit)
                if (!isConnected) {
                    this.fallenBricks += checkHelper.alreadyCheckedHits.size
                    for (checkedHit of checkHelper.alreadyCheckedHits) {
                        let checkedHitArray = checkedHit[0].split(',')
                        this.grid[checkedHitArray[0]][checkedHitArray[1]] = 0
                    }
                }
            }
        }
    }

    existsInGrid(hit) {
        return hit[0] >= 0 &&
            hit[0] < this.grid.length &&
            hit[1] >= 0 &&
            hit[1] < this.grid[0].length
    }
}

class CheckGridHelper {
    constructor(grid) {
        this.grid = grid
        this.alreadyCheckedHits = new Map()
    }

    checkConnected(hit) {
        if (!this.grid[hit[0]][hit[1]]) {
            return false
        }

        if (hit[0] === 0) {
            // add to gridcache checked?
            return true
        } else {
            // add to gridcache not checked?
            this.alreadyCheckedHits.set(hit.toString(), true)
        }

        const placesToCheck = [
            [hit[0] - 1, hit[1]],
            [hit[0], hit[1] + 1],
            [hit[0] + 1, hit[1]],
            [hit[0], hit[1] - 1]
        ]
        for (let i = 0; i < placesToCheck.length; i++) {
            let nextHit = placesToCheck[i]
            if (this.existsInGrid(nextHit) && !this.alreadyCheckedHits.has(nextHit.toString()) {
                let isConnected = checkConnected(nextHit)
                if (isConnected) {
                    return isConnected
                }
            }
        }

        return false
    }

    existsInGrid(hit) {
        return hit[0] >= 0 &&
            hit[0] < this.grid.length &&
            hit[1] >= 0 &&
            hit[1] < this.grid[0].length
    }
}



/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/



