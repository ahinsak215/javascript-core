let user = {
  name: "Anshu",
  age: 22,
};

let { name: userName, age: userAge } = user;

console.log(userName, userAge);

// Renaming with default values
let { name: uName = "Guest", country: uCountry = "Unknown" } = user;

console.log(uName, uCountry); // Output: Anshu Unknown

// Nested object renaming
let employee = {
  id: 101,
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
  },
  jobDetails: {
    position: "Manager",
    department: "Sales",
  },
};

let {
  personalInfo: { firstName: fName, lastName: lName },
  jobDetails: { position: pos },
} = employee;

console.log(fName, lName, pos); // Output: John Doe Manager

// Using rest operator with renaming
let { name: n, ...restInfo } = user;

console.log(n); // Output: Anshu
console.log(restInfo); // Output: { age: 22 }

// Function parameter destructuring with renaming
function displayUser({ name: uname, role: urole = "User" }) {
  console.log(`Name: ${uname}, Role: ${urole}`);
}

displayUser(user);

// Swapping variables using destructuring with renaming
let var1 = "Hello",
  var2 = "World";

({ var1: varA, var2: varB } = { var1: var2, var2: var1 });

console.log(varA, varB); // Output: World Hello