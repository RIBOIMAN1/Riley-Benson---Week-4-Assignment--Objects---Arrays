// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function range(start, end) { // Defines the range function, which accepts start and end as its parameters
    let result = []; // Initializes an empty array in order to hold the result
    for (let i = start; i <= end; i++) { // Loops from the start to the end inclusively
        result.push(i); // Adds the current number to the result array
    }
    return result; // Returns the array containing the range of numbers
}
console.log(range(5, 14)); // Outputs "[5, 6, 7, 8, 9, 10, 11, 12, 13, 14]" to the console

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55
function sum(array) { // Defines the sum function, which accepts an array as its parameter
    let total = 0; // Sets up a variable to store the sum
    for (let number of array) { // Loops through each number in the array
        total += number; // Adds the current number to the total
    }
    return total; // Returns the total sum of the numbers
}
console.log(sum(range(5, 14))); // Outputs "95" to the console

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
function reverseArray(array) { // Defines "reverseArray", which takes an array as a parameter
    let newArray = []; // Starts an empty array, holding the reversed elements
    for (let i = array.length - 1; i >= 0; i--) { // Loops from the last element back to the first element
        newArray.push(array[i]); // Adds the current element to the new array
    }
    return newArray; // Returns the new array with the elements in reverse order
}
console.log(reverseArray(["X", "Y", "Z"])); // Outputs "["Z", "Y", "X"]" to the console

function reverseArrayInPlace(array) { //  Defines reverseArrayInPlace, a function that takes an array as a parameter
  for (let i = 0; i < Math.floor(array.length / 2); i++) { // Loops from the start to the middle of the array
      let temp = array[i]; // Temporarily stores the current element
      array[i] = array[array.length - 1 - i]; // The current element gets replaced with the corresponding element from the end
      array[array.length - 1 - i] = temp; // The corresponding element from the end gets replaced with the current element
  }
}
let arrayValue = [10, 11, 12, 13, 14]; // Defines an array of numbers
reverseArrayInPlace(arrayValue); // Calls reverseArrayInPlace to reverse the array in place
console.log(arrayValue); // Outputs "[14, 13, 12, 11, 10]" to the console