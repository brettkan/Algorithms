/*

Spiral Traversal

*/

/**
 * @param {array} grid
 */

function spiralTraversal(grid) {
    let leftBound = 0
    let rightBound = grid[0].length - 1
    let topBound = 0
    let bottomBound = grid.length - 1

    while (leftBound < rightBound && topBound < bottomBound) {
        // Iterate over from right to left across top of open grid space
        for (let i = leftBound; i <= rightBound; i++) {
            doWork(grid[topBound][i])
        }
        topBound++

        // Iterate from top to bottom on right side of open grid space
        for (let j = topBound; j <= bottomBound; j++) {
            doWork(grid[j][rightBound])
        }
        rightBound--

        // Iterate from right to left across bottom of open grid space
        for (let k = rightBound; k >= leftBound; k--) {
            doWork(grid[bottomBound][k])
        }
        bottomBound--

        // Iterate from bottom to top on left side of open grid space
        for (let l = bottomBound; l >= topBound; l--) {
            doWork(grid[l][leftBound])
        }
        leftBound++
    }

    return grid
}

function doWork(val) {
    console.log(val)
}


/**
 * HELPERS
 **/

function createGrid(height, width) {
    const grid = []
    let counter = 1

    for (let i = 0; i < height; i++) {
        grid.push([])
        for (let j = 0; j < width; j++) {
            grid[i].push(counter++)
        }
    }

    return grid
}

/**
 * TEST CASES
 **/

const grid = createGrid(4, 4)
console.log(spiralTraversal(grid))

const grid2 = createGrid(8, 2)
console.log(spiralTraversal(grid2))

const grid3 = createGrid(7, 1)
console.log(spiralTraversal(grid3))

const grid4 = createGrid(3, 5)
console.log(spiralTraversal(grid4))

