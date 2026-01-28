let nums = [10, 20, 30];

let [a, b, c] = nums;

console.log(a, b, c); // Output: 10 20 30

// Skipping elements
let [x, , z] = nums;

console.log(x, z); // Output: 10 30

// Using rest operator
let [first, ...rest] = nums;

console.log(first); // Output: 10
console.log(rest);  // Output: [20, 30]

// Default values
let [m = 1, n = 2, o = 3, p = 4] = [10, 20];

console.log(m, n, o, p); // Output: 10 20 3 4

// Nested array destructuring
let nested = [1, [2, 3], 4];

let [i, [j, k], l] = nested;

console.log(i, j, k, l); // Output: 1 2 3 4

// Swapping variables using destructuring
let p1 = 5, p2 = 10;

[p1, p2] = [p2, p1];

console.log(p1, p2); // Output: 10 5 