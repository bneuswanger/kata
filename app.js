// ////////// Challenge 1 ////////////
// // Challenge: Given 2 arrays of numbers, return the first
// // array with any values from the second array removed.

// // My solution
// function arrayDiff(a, b) {
//     return a.filter(aa => {
//         return !b.some(bb => bb === aa)
//     })
// }

// //A more concise solution from community
// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e))
// }

// // Tests                                  // Expected Results
// console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]
// console.log(arrayDiff([1, 8, 2], []))     // [1,8,2]
// console.log(arrayDiff([3, 4], [3]))       // [4]
// console.log(arrayDiff([], [4, 5]))        // []



// ////////// Challenge 2 ////////////
// // Digital root is the recursive sum of all the digits in a number.
// // Given n, take the sum of the digits of n. If that value has more than
// // one digit, continue reducing in this way until a single-digit number
// // is produced. The input will be a non-negative integer.

// // ORIGINAL FUNCTION (WORKS)
// function digital_root(n) {
//     let sumstring = 0;
//     for (let i of n.toString()) {
//         sumstring += parseInt(i)
//     }
//     if (sumstring < 10) {
//         console.log(sumstring)
//         return sumstring
//     } else {
//         digital_root(sumstring)
//     }
// }

// // REFACTOR WITH TERNARY OPERATOR (WORKS)
// function digital_root(n) {
//     let sumstring = 0;
//     for (let i of n.toString()) {
//         sumstring += parseInt(i)
//     }
//     return sumstring > 9 ? digital_root(sumstring) : sumstring
// }


// // Tests                    // Correct Results
// digital_root(16)            // 7
// digital_root(942)           // 6
// digital_root(132189)        // 6
// digital_root(493193)        // 2
// digital_root(4786532968753) // 1



// ////////// Challenge 3 ////////////
// // Some numbers have funny properties. For example:
// // 89 --> 8¹ + 9² = 89 * 1
// // 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// // 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// // Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// // we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// // In other words:
// // Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// // If it is the case we will return k, if not return -1.
// // Note: n and p will always be given as strictly positive integers.

// function digPow(test, p) {
//     let arr = []
//     for (let t of test.toString()) {
//         arr.push(Math.pow(parseInt(t), p))
//         p++
//     }
//     const sum = arr.reduce((a, b) => {
//         return a + b
//     })
//     return sum % test === 0 ? sum / test : -1
// }

// console.log(digPow(89, 1))
// console.log(digPow(92, 1))
// console.log(digPow(695, 2))
// console.log(digPow(46288, 3))

// // Test           // Correct Result   // Rationale
// digPow(89, 1)     // 1                8¹ + 9² = 89 = 89 * 1
// digPow(92, 1)     // -1               there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2)    // 2                6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3)  // 51               4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51






// //////////// Challenge 4 ////////////
// // Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// // If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// // My Solution
// function findNextSquare(sq) {
//     let sqrt = Math.sqrt(sq)
//     const ips = sqrt - Math.floor(sqrt) === 0;
//     if (ips) {
//         return Math.pow(++sqrt, 2)
//     } else {
//         return -1
//     }
// }

// // Top Solution
// function findNextSquare(sq) {
//     return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// // Another fun one
// function findNextSquare(sq) {
//     let r = Math.sqrt(sq)
//     return r % 1 ? -1 : ++r * r
// }


// // Test                     //Correct Result
// console.log(findNextSquare(319225))       // 320356
// console.log(findNextSquare(625))          // 676
// console.log(findNextSquare(121))          // 144
// console.log(findNextSquare(15241383936))  // 15241630849
// console.log(findNextSquare(155))          // -1
// console.log(findNextSquare(342786627))    // -1



// //////////// Challenge 5 ////////////
// // Given random string with letters, numbers, and/or symbols, return a string such that each letter of the original string is replaced it's corresponding number in the alphabet.  eg) a = 1, b = 2, etc.  The string "baa!" should return "2 1 1".

// // My Solution
// function alphabetPosition(text) {
//     const alph = 'abcdefghijklmnopqrstuvwxyz'
//     let str = ''
//     for (let i of text.toLowerCase()) {
//         if (alph.includes(i)) {
//             str += (alph.indexOf(i) + 1)
//             str += (' ')
//         }
//     } return str.trim()
// }

// // Best Practice Solution
// function alphabetPosition(text) {
//     return text
//         .toUpperCase()
//         .match(/[a-z]/gi)  // //This could be .match(/[A-Z]/g) and work as well.  Is it faster with the i?
//         .map((c) => c.charCodeAt() - 64)
//         .join(' ');
// }

// // .toUpperCase to convert string to all upper case, because in dec value, lower-case and upper-case are different integer values.

// // .match(/[a-z]/gi) returns an array object based on regex filter, g multiple instance, i any case.

// // .map((c) => c.charCodeAt() - 64 ) to create a new array populated with the results of calling a provided function on every element in the calling array. Runs through the array object, and results in the index position.

// // .join(' ') converts the array object ['a', 'b'] back into a string 'a b'


// console.log(alphabetPosition('coot'))
// console.log(alphabetPosition('Zoo'))
// console.log(alphabetPosition('I am Groot'))
// console.log(alphabetPosition('This - has puncTuation.'))



//////////// Challenge 6 ////////////

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.









//////////// Challenge 7 ////////////
//////////// Challenge 8 ////////////
//////////// Challenge 9 ////////////
//////////// Challenge 10 ////////////
//////////// Challenge 11 ////////////
//////////// Challenge 12 ////////////
