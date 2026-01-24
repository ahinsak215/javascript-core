let user = {
  name: "Anshu",
  age: 22,
};

console.log(Object.keys(user)); // Output: [ 'name', 'age' ]
console.log(Object.values(user)); // Output: [ 'Anshu', 22 ]
console.log(Object.entries(user)); // Output: [ [ 'name', 'Anshu' ], [ 'age', 22 ] ]

// This code demonstrates how to use built-in object methods in JavaScript. 
// Object.keys() returns an array of the object's property names.
// Object.values() returns an array of the object's property values.
// Object.entries() returns an array of the object's key-value pairs as arrays.