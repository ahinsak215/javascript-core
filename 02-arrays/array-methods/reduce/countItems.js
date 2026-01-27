let fruits = ["apple", "banana", "apple"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // Output: { apple: 2, banana: 1 }

// This code uses the reduce() method to count the occurrences of each fruit in the 'fruits' array. 
// The reduce() method iterates over each element in the array, updating an accumulator object 'acc' that keeps track of the counts. 
// For each fruit, it checks if the fruit already exists as a key in the accumulator; if it does, it increments the count by 1, otherwise, it initializes the count to 1. 
// The final result is an object where the keys are the fruit names and the values are their respective counts, which is then logged to the console.
