/*

Implement a move for the game 2048

*/

/**
 * @param {number[]} height
 * @return {number}
 */
class Grid {
    constructor(size) {
        this.size = size
        this.grid = this.createEmptyGrid() // this.grid[y][x]
    }

    createEmptyGrid() {
        let grid = []

        for (let y = 0; y < this.size; y++) {
            grid[y] = []
            for (let x = 0; x < this.size; x++) {
                grid[y][x] = null
            }
        }

        return grid
    }

    moveRight() {
        const newGrid = this.createEmptyGrid()

        for (let y = 0; y < this.grid[0].length; y++) {
            for (let x = this.grid.length - 1; x >= 0; x--) {
                const cellVal = this.grid[y][x]
                const cellPos = { x, y }
                if (cellVal) {
                    this.right(cellPos, newGrid)
                }
            }
        }

        this.grid = this.mapMergedGridToFlatGrid(newGrid)
        return this.grid
    }

    right(originalCellPos, newGrid) {
        const originalVal = this.grid[originalCellPos.y][originalCellPos.x]
        const newCellPos = { x: originalCellPos.x, y: originalCellPos.y }

        while (newCellPos.x < this.size && newGrid[newCellPos.y][newCellPos.x + 1] === null) {
            newCellPos.x++
        }

        const newCellToRight = newGrid[newCellPos.y][newCellPos.x + 1]

        if (newCellPos.x + 1 < this.size && newCellToRight.val === originalVal && newCellToRight.hasMerged === false) {
            newCellToRight.val *= 2
            newCellToRight.hasMerged = true
        } else {
            newGrid[newCellPos.y][newCellPos.x] = {
                val: originalVal,
                hasMerged: false,
            }
        }
    }

    mapMergedGridToFlatGrid(newGrid) {
        return newGrid.map(row => row.map(cellObj => cellObj ? cellObj.val : null))
    }
}






/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

const grid = new Grid(4)
grid.grid = [
    [2, 2, 2, 2],
    [6, 8, 4, 2],
    [null, 4, 4, null],
    [2, null, null, 2],
]

console.log(grid.grid)
grid.moveRight()
console.log(grid.grid)
grid.moveRight()
console.log(grid.grid)

// [null, null, 4, 4]
// [6, 8, 4, 2]
// [null, null, null, 8]
// [null, null, null, 4]

// [null, null, null, 8]
// [6, 8, 4, 2]
// [null, null, null, 8]
// [null, null, null, 4]

