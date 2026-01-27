let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];

let names = users.map((user) => user.name);

console.log(names); // Output: ["A", "B"]

// This code uses the map() method to extract the 'name' property from each object in the 'users' array. 
// The result is a new array 'names' that contains only the names: ["A", "B"].