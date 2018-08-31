/*

EXPLANATION HERE

*/

/**
 * SOLUTION
 */
function arithmeticBoggle(magicNumber, numbers) {
    function attemptSolution(target, options, current = null) {
        if (current === target) {
            return true
        }

        for (let i = 0; i < options.length; i++) {
            let curNumber = options[i]

            if (attemptSolution(target, [...options.slice(0, i), ...options.slice(i + 1)], current + curNumber)) {
                return true
            }

            if (attemptSolution(target, [...options.slice(0, i), ...options.slice(i + 1)], current - curNumber)) {
                return true
            }
        }

        return false
    }

    if (magicNumber === 0 && numbers.length === 0) {
        return true
    }

    return attemptSolution(magicNumber, numbers)
}



/**
 * TEST CASES
 **/

console.log(arithmeticBoggle(10, [1, 2])) // = false. There's no way to add or subtract 1 and 2 to get 10.
console.log(arithmeticBoggle(2, [1, 2, 3, 4])) // = true. 1 + 2 + 3 - 4 // = 2.
console.log(arithmeticBoggle(0, [])) // = true
console.log(arithmeticBoggle(1, [])) // = false
console.log(arithmeticBoggle(1, [1])) // = true
console.log(arithmeticBoggle(0, [1])) // = false
console.log(arithmeticBoggle(2, [4, 3, 1])) // = true

