/*

Spiral Traversal

*/

/**
 * @param {array} grid
 */

function spiralTraversal(grid) {

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
console.log(spiralTraversal(grid)

const grid2 = createGrid(8, 2)
console.log(spiralTraversal(grid2)

const grid3 = createGrid(7, 1)
console.log(spiralTraversal(grid3)

const grid4 = createGrid(3, 5)
console.log(spiralTraversal(grid4)

