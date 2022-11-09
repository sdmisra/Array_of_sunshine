var nameStrings = ["Shane", "Dustin", "Isaiah", "Dan", "Kaitlyn"]
var ageNumbers = [32, 30, 25, 33, 27]
var factsBooleans = [true, true, false, true, false]
console.log(nameStrings)
console.log(ageNumbers)
console.log(factsBooleans)
 // METHOD 1 - .pop() // This method below will remove the most recently added value from the array - the last value in the index. Sorry Kaitlyn! This method DOES redefine the array that is affected.
nameStrings.pop()
// The below should now return ["Shane", "Dustin", "Isaiah", "Dan"]
console.log(nameStrings)


// METHOD 2 - .slice() // This method below will create a "shallow copy" of the string affected, where the copy will contain the values at the listed index up until the ending index, but not including it. This method does NOT redefine the array indicated on a global level.
ageNumbers.slice(0,3)
//The below should now return [32, 30, 25]
console.log(ageNumbers.slice(0, 3))
// The below should still return the original values as defined on line 2. [32, 30, 25, 33, 27]
console.log(ageNumbers)


// METHOD 3 - .push() // This method will add the indicated value to the array (strings, numbers, booleans, whatever you like), but then returns a number indicating the length of new array. 
var pushResult = factsBooleans.push(false, true, false, false)
// The original array should have had the values added to the end of the index, and the variable pushResult should indicate the length of the new array as a number. The result should be : 9
console.log(pushResult)
// Is this a number? Let's check it with the typeof operator!
console.log(typeof(pushResult))
// What does the new array look like? I expect it to be: 
//[true, true, false, true, false, false, true, false, false]
console.log(factsBooleans)
// INDEX POSITIONS //
// In programming, counting generally begins from 0, rather than from 1. That means that the first value within an array is considered to be at index position 0. The second value at 1, etc. We can also use negative numbers to begin counting from the end of the array, such as using the index position of -1 to indicate the final position in the array.

// We can practice this concept by printing to the console and guessing what the output will be based off of this understanding.

// Prediction : console.log(ageNumbers[0]) will return 32 (as a number)
console.log(ageNumbers[0])
console.log(typeof(ageNumbers[0]))
// Prediction : console.log(factsBooleans[2]) will return false (boolean).
console.log(factsBooleans[2])
console.log(typeof(factsBooleans[2]))