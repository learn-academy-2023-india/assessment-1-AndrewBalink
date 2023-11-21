// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// // Pseudo code: 
// // Declare a variale to hold the combined array. Use the concat method to combine the two arrays.
// // Return the length of the combined array using length property.
// const combinedWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(combinedWorldSeriesRuns.length)
// The code works and give us the expected outcome of 9, combining the two arrays and returning the length. 

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// Split the string into an array of characters by using split() method.
// Reverse the array of characters using the reverse() method.
// Join the reversed array of characters back into a string using the join() method.
// Return the reversed string. 

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }

// console.log(reverseString(currentCohort))
// // This code works and gives us the expected outcome of "3202 NRAEL", reversing the letters of the original string. 


// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// Define the array of numbers. 
// Create a for() loop that will iterate over each item in the array.
// Inside the loop, use an if statement to check if the current number is odd. 
// If the number is odd, log it in the console.

// for(let i = 0; i < stockExchange.length; i++) {
//     if(stockExchange[i] % 2 !==0) {
//         console.log(stockExchange[i])
//     }
// }
// This code works because the code logs all the odd numbers in the stockExchange array. 