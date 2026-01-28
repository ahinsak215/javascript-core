let a = [1, 2, 3];
let b = [...a, 4, 5];

console.log(b); // Output: [1, 2, 3, 4, 5]

let c = [0, ...a, 6];

console.log(c); // Output: [0, 1, 2, 3, 6]

let d = [...a];

console.log(d); // Output: [1, 2, 3]

// Merging arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];

console.log(merged); // Output: [1, 2, 3, 4]

// Copying arrays
let original = [5, 6, 7];
let copy = [...original];

console.log(copy); // Output: [5, 6, 7]

// Using spread with Math functions
let numbers = [10, 20, 5, 15];
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);

console.log(maxNum); // Output: 20
console.log(minNum); // Output: 5