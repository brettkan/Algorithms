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

        this.VECTOR_RIGHT = { x: 1, y: 0 }
        this.VECTOR_LEFT = { x: -1, y: 0 }
        this.VECTOR_UP = { x: 0, y: -1 }
        this.VECTOR_DOWN = { x: 0, y: 1 }
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
        this.moveAll(this.VECTOR_RIGHT)
    }

    moveLeft() {
        this.moveAll(this.VECTOR_LEFT)
    }

    moveUp() {
        this.moveAll(this.VECTOR_UP)
    }

    moveDown() {
        this.moveAll(this.VECTOR_DOWN)
    }

    moveAll(vector) {
        const newGrid = this.createEmptyGrid()
        const traversals = this.getTraversals(vector)

        for (let y = 0; y < traversals.y.length; y++) {
            for (let x = 0; x < traversals.x.length; x++) {
                const cellVal = this.grid[traversals.y[y]][traversals.x[x]]
                const cellPos = { x: traversals.x[x], y: traversals.y[y] }
                if (cellVal) {
                    this.moveToUpdatedGrid(cellPos, vector, newGrid)
                }
            }
        }

        this.grid = this.mapMergedGridToFlatGrid(newGrid)
        return this.grid
    }

    moveToUpdatedGrid(originalCellPos, vector, newGrid) {
        const originalVal = this.grid[originalCellPos.y][originalCellPos.x]

        let currentPos = { x: originalCellPos.x, y: originalCellPos.y }
        let nextPos = { x: currentPos.x + vector.x, y: currentPos.y + vector.y }

        while (this.isValidPosition(nextPos) && newGrid[nextPos.y][nextPos.x] === null) {
            currentPos = nextPos
            nextPos = { x: currentPos.x + vector.x, y: currentPos.y + vector.y }
        }

        if (this.isValidPosition(nextPos) && newGrid[nextPos.y][nextPos.x].val === originalVal && newGrid[nextPos.y][nextPos.x].hasMerged === false) {
            newGrid[nextPos.y][nextPos.x].val *= 2
            newGrid[nextPos.y][nextPos.x].hasMerged = true
        } else {
            newGrid[currentPos.y][currentPos.x] = {
                val: originalVal,
                hasMerged: false,
            }
        }
    }

    mapMergedGridToFlatGrid(newGrid) {
        return newGrid.map(row => row.map(cellObj => cellObj ? cellObj.val : null))
    }

    isValidPosition(cellPos) {
        return cellPos.x >= 0 &&
            cellPos.y >= 0 &&
            cellPos.x < this.size &&
            cellPos.y < this.size
    }

    getTraversals(vector) {
        const traversals = {
            x: [],
            y: [],
        }

        for (let i = 0; i < this.size; i++) {
            traversals.x[i] = i
            traversals.y[i] = i
        }

        if (vector.x === 1) {
            traversals.x = traversals.x.reverse()
        }
        if (vector.y === 1) {
            traversals.y = traversals.y.reverse()
        }

        return traversals
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

