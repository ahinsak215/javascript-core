let users = [{ name: "Anshu", age: 22 }];

let formatted = users.map((user) => {
  return `${user.name} (${user.age})`;
});

console.log(formatted); // Output: ["Anshu (22)"]

// This code uses the map() method to create a new array 'formatted' that contains strings formatted as "name (age)" for each user object in the original 'users' array. 
// Each object 'user' in the 'users' array is transformed into a string that combines the 'name' and 'age' properties in the specified format.