/*

Write a function that takes a magic number and a list of numbers. It returns true if it can
insert add or subtract operations in the list of numbers to get the magic number. Otherwise,
it returns false.

For example:

f(10, [1, 2]) = false. There's no way to add or subtract 1 and 2 to get 10.
f(2, [1, 2, 3, 4]) = true. 1 + 2 + 3 - 4 = 2.
f(0, []) = true
f(1, []) = false
f(1, [1]) = true
f(0, [1]) = false

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

            if (attemptSolution(target, options.slice(i + 1), current + curNumber)) {
                return true
            }

            if (attemptSolution(target, options.slice(i + 1), current - curNumber)) {
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
console.log(arithmeticBoggle(-1, [4, 3, 1])) // = true

