/*

Convert a non-negative integer to its english words representation. Given input is guaranteed
to be less than 2^31 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"

Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

*/


/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const suffixes = {
        1: 'Thousand',
        2: 'Million',
        3: 'Billion',
    }
    const thousandsSepArr = getThousandsSepNumberArray(num).reverse()

    let solution = ''

    for (let i = 0; i < thousandsSepArr.length; i++) {
        if (Number(thousandsSepArr[i]) === 0) {
            continue
        }

        let next = hundredsNumberToWords(thousandsSepArr[i]) 
        if (suffixes[i]) {
            next += ' ' + suffixes[i] + ' '
        }
        solution = next + solution
    }

    return solution.trim() || 'Zero'
};

function getThousandsSepNumberArray(num) {
    const strNum = num.toString()
    const result = []
    let resultIndex = 0

    for (let i = 0; i < strNum.length; i++) {
        if ((strNum.length - i) % 3 === 0 && i !== 0) {
            resultIndex++
        }
        result[resultIndex] = result[resultIndex] || ''
        result[resultIndex] += strNum[i]
    }

    return result
}

function hundredsNumberToWords(strNum) {
    if (strNum.length === 1) {
        return digitToWord(strNum)
    } else if (strNum.length === 2) {
        return tensToWord(strNum)
    } else if (strNum.length === 3) {
        let result = ''
        if (strNum[0] !== '0') {
            result += digitToWord(strNum[0]) + ' Hundred'
        }
        if (strNum.slice(1) !== '00') {
            result += ' ' + tensToWord(strNum.slice(1))
        }

        return result.trim()
    }

    return ''
}

function digitToWord(strNum) {
    const digitMap = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }

    return digitMap[strNum] || ''
}

function tensToWord(strNum) {
    let result = ''

    switch (strNum[0]) {
        case '0':
            return digitToWord(strNum[1])
        case '1':
            switch(strNum) {
                case '10':
                    return 'Ten'
                case '11':
                    return 'Eleven'
                case '12':
                    return 'Twelve'
                case '13':
                    return 'Thirteen'
                case '14':
                    return 'Fourteen'
                case '15':
                    return 'Fifteen'
                case '16':
                    return 'Sixteen'
                case '17':
                    return 'Seventeen'
                case '18':
                    return 'Eighteen'
                case '19':
                    return 'Nineteen'
                default:
                    throw new Error('tens not given')
            }
        case '2':
            result = 'Twenty ' + digitToWord(strNum[1])
            return result.trim()
        case '3':
            result = 'Thirty ' + digitToWord(strNum[1])
            return result.trim()
        case '4':
            result = 'Forty ' + digitToWord(strNum[1])
            return result.trim()
        case '5':
            result = 'Fifty ' + digitToWord(strNum[1])
            return result.trim()
        case '6':
            result = 'Sixty ' + digitToWord(strNum[1])
            return result.trim()
        case '7':
            result = 'Seventy ' + digitToWord(strNum[1])
            return result.trim()
        case '8':
            result = 'Eighty ' + digitToWord(strNum[1])
            return result.trim()
        case '9':
            result = 'Ninety ' + digitToWord(strNum[1])
            return result.trim()
        default:
            throw new Error('invalid case given to tensToWord')
    }

    throw new Error('invalid case given to tensToWord')
}


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

// for (let i = 200; i < 300; i++) {
//     console.log(hundredsNumberToWords(i.toString()))
// }

// console.log(getThousandsSepNumberArray(1234567891), 'for 1234567891')
// console.log(getThousandsSepNumberArray(123), 'for 123')
// console.log(getThousandsSepNumberArray(1234), 'for 1234')

console.log(numberToWords(0), 'for 0')
console.log(numberToWords(10), 'for 10')
console.log(numberToWords(100), 'for 100')
console.log(numberToWords(1000000), 'for 1000000')
console.log(numberToWords(123), 'for 123')
console.log(numberToWords(123), 'for 123')
console.log(numberToWords(12345), 'for 12345')
console.log(numberToWords(1234567), 'for 1234567')
console.log(numberToWords(1234567891), 'for 1234567891')
