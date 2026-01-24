let user = {
  name: "Anshu",
  age: 22,
};

user.age = 23;
user.city = "Jodhpur";
delete user.name;

console.log(user); // Output: { age: 23, city: 'Jodhpur' }

// This code demonstrates how to update and delete properties of an object in JavaScript. 
// The age property is updated to 23, a new property city is added, and the name property is deleted.