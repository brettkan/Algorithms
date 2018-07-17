/*

Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements
made in a 5x5 grid of cells starting from the top left position. The characters in the input string will be
entirely composed of: r, l, u, d, ?. Each of the characters stand for the direction to take within the grid,
for example: r = right, l = left, u = up, d = down. Your goal is to determine what characters the question
marks should be in order for a path to be created to go from the top left of the grid all the way to the
bottom right without touching previously travelled on cells in the grid. 

For example: if str is "r?d?drdd" then your program should output the final correct string that will allow
a path to be formed from the top left of a 5x5 grid to the bottom right. For this input, your program should
therefore return the string rrdrdrdd. There will only ever be one correct path and there will always be at
least one question mark within the input string. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

*/

function CorrectPath(str) {
    const gridWidth = 5
    const gridHeight = 5
    const indexToFind = str.indexOf('?')
    const moves = ['u', 'r', 'd', 'l']

    if (isValidPosition(str, gridWidth, gridHeight)) {
        if (isGridComplete(str, gridWidth, gridHeight)) {
            return str
        }

        if (indexToFind === -1) {
            return false
        }

        for (let i = 0; i < moves.length; i++) {
            const path = CorrectPath(str.replace('?', moves[i]))
            if (path) {
                return path
            }
        }
    }

    return false
}

function isValidPosition(str, gridWidth, gridHeight) {
    const position = [0, 0]
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i]
        switch (currentLetter) {
            case 'u':
                position[1]--
                break
            case 'r':
                position[0]++
                break
            case 'd':
                position[1]++
                break
            case 'l':
                position[0]--
                break
            default:
                return true
        }

        if (
          position[0] < 0 ||
          position[0] >= gridWidth ||
          position[1] < 0 ||
          position[1] >= gridHeight
        ) {
            return false
        }
    }

    return position
}

function isGridComplete(str, gridWidth, gridHeight) {
    const finalPosition = isValidPosition(str)
    return finalPosition &&
        Array.isArray(finalPosition) &&
        finalPosition[0] === gridWidth - 1 &&
        finalPosition[1] === gridHeight - 1
}

console.log(CorrectPath('r?d?drdd'))
console.log(CorrectPath('????????'))
