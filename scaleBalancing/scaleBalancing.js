/* 

Challenge
Using the JavaScript language, have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two
positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers.
Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights.
For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the
right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side.
Both scales will now equal 11 and they are perfectly balanced. Your program should return a common separated string of the weights that were used
from the list in ascending order, so for this example your program should return the string 2,6 

There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only
one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible. 

Sample Test Cases
Input:"[3, 4]", "[1, 2, 7, 7]"
Output:"1"

Input:"[13, 4]", "[1, 2, 3, 6, 14]"
Output:"3,6"

*/

function ScaleBalancing(strArr) { 
    const scaleArr = parseStringArray(strArr[0])
    const availableArr = parseStringArray(strArr[1]).sort((a, b) => a - b)
    const diff = Math.abs(scaleArr[0] - scaleArr[1])

    return testArray(diff, availableArr) || 'not possible';
         
}

function parseStringArray(str) {
    return str.slice(1, str.length - 1).split(',').map(strNumber => {
        return Number(strNumber)
    })
}

function testArray(diff, available = [], used = []) {
    if (diff === 0) {
        return used.sort((a, b) => a - b).join(',')
    }
    
    if (available.length === 0 || used.length === 2) {
        return false
    }
    
    for (let i = 0; i < available.length; i++) {
        const current = available[i]
        
        // Test subtracting the number
        const testSubtract = testArray(diff - current, [...available.slice(0, i), ...available.slice(i + 1)], [...used, current])
        if (testSubtract) {
            return testSubtract
        }
        
        // Test adding the number
        const testAdd = testArray(diff + current, [...available.slice(0, i), ...available.slice(i + 1)], [...used, current])
        if (testAdd) {
            return testAdd
        }
    }
    
    return false
}

// keep this function call here 
ScaleBalancing("[[6, 1]", "[1, 10, 6, 5]"]);

