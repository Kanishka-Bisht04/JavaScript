// Push --> Add to the end of the array
// It modifies the original array and returns the new length of the array.

let foodItems = ["potato", "apple", "mango", "spinach", "milk"];
console.log(foodItems.push("carrot")); // Output: 6 (new length)
console.log(foodItems); // Output: ["potato", "apple", "mango", "spinach", "milk", "carrot"]


// Pop --> Remove from the end of the array and returns the deleted item
// It modifies the original array.

let deletedItem = foodItems.pop();
console.log(foodItems); // Output: ["potato", "apple", "mango", "spinach", "milk"]
console.log("Deleted: ", deletedItem); // Output: Deleted: carrot


// toString --> Converts the array into a comma-separated string
// Does not modify the original array.

console.log(foodItems.toString()); 
// Output: "potato,apple,mango,spinach,milk"


// concat --> Joins multiple arrays and returns a new array
// Does NOT modify the original array.

let fruits = ["banana", "orange"];
let combined = foodItems.concat(fruits);
console.log(combined); 
// Output: ["potato", "apple", "mango", "spinach", "milk", "banana", "orange"]


// unshift --> Add item(s) to the beginning of the array
// Returns the new length and modifies the array.

foodItems.unshift("bread");
console.log(foodItems); 
// Output: ["bread", "potato", "apple", "mango", "spinach", "milk"]


// shift --> Remove the first element from the array and return it
// Modifies the original array.

let firstItem = foodItems.shift();
console.log(foodItems); 
// Output: ["potato", "apple", "mango", "spinach", "milk"]
console.log("Removed: ", firstItem); 
// Output: Removed: bread


// slice --> Returns a shallow copy of a portion of an array into a new array
// Does NOT modify the original array
// slice(startIdx, endIdx) - endIdx is excluded

let slicedItems = foodItems.slice(1, 4);
console.log(slicedItems); 
// Output: ["apple", "mango", "spinach"]
console.log(foodItems); 
// Original array remains unchanged


// splice --> Used to add, remove, or replace elements
// Modifies the original array
// Syntax: splice(startIdx, deleteCount, item1, item2, ...)

// a) Add using splice
foodItems.splice(2, 0, "cucumber", "tomato"); 
console.log(foodItems); 
// Output: ["potato", "apple", "cucumber", "tomato", "mango", "spinach", "milk"]

// b) Delete using splice
foodItems.splice(3, 2); 
console.log(foodItems); 
// Output: ["potato", "apple", "cucumber", "spinach", "milk"]

// c) Replace using splice
// Replace 1 element at index 2 with "broccoli"
foodItems.splice(2, 1, "broccoli"); 
console.log(foodItems); 
// Output: ["potato", "apple", "broccoli", "spinach", "milk"]


