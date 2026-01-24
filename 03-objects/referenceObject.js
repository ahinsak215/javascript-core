let a = { count: 1 };
let b = a;

b.count = 2;

console.log(a); // Output: { count: 2 }
console.log(b); // Output: { count: 2 }

// This code demonstrates that objects in JavaScript are reference types. 
// When we assign object 'a' to variable 'b', both 'a' and 'b' reference the same object in memory. 
// Therefore, changes made through 'b' are reflected in 'a' as well.