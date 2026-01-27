let users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
];

let adults = users.filter((user) => user.age >= 18);

console.log(adults); // Output: [{ name: "B", age: 22 }]

// This code uses the filter() method to create a new array 'adults' that contains only the user objects where the 'age' property is 18 or older from the original 'users' array. 
// The filter() method tests each object in the array with the provided function, and only those objects that return true are included in the new array. 
// In this case, the resulting array 'adults' will contain only the object for user "B" since they are 22 years old.