let a = [1, 2, 3];
let b = a;

b.push(4);
console.log(a);
console.log(b);

// This code demonstrates that arrays in JavaScript are reference types.
// When array b is assigned to array a, both variables reference the same array in memory.
// Therefore, modifying b also affects a, resulting in both logging [1, 2, 3, 4].