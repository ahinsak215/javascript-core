let user = {
  name: "Anshu",
  age: 22,
  role: "Developer",
};

let { name, age } = user;

console.log(name, age); // Output: Anshu 22

// Renaming variables
let { role: userRole } = user;

console.log(userRole); // Output: Developer

// Default values
let { name: userName = "Guest", country = "Unknown" } = user;

console.log(userName, country); // Output: Anshu Unknown

// Nested object destructuring
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
  personalInfo: { firstName, lastName },
  jobDetails: { position },
} = employee;

console.log(firstName, lastName, position); // Output: John Doe Manager

// Using rest operator
let { name: n, ...restInfo } = user;

console.log(n); // Output: Anshu
console.log(restInfo); // Output: { age: 22, role: 'Developer' }

// Function parameter destructuring
function displayUser({ name, role }) {
  console.log(`Name: ${name}, Role: ${role}`);
}

displayUser(user); // Output: Name: Anshu, Role: Developer

// Swapping variables using destructuring
let var1 = "Hello",
  var2 = "World";

({ var1, var2 } = { var1: var2, var2: var1 });

console.log(var1, var2); // Output: World Hello