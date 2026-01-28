let user = {
  name: "Anshu",
};

let { name, age = 18 } = user;

console.log(name, age); // Output: Anshu 18

// Renaming with default values
let { name: userName = "Guest", country: userCountry = "Unknown" } = user;

console.log(userName, userCountry); // Output: Anshu Unknown

// Nested object with default values
let employee = {
  id: 101,
  personalInfo: {
    firstName: "John",
  },
};

let {
  personalInfo: { firstName, lastName = "Doe" },
  jobDetails: { position = "Employee" } = {},
} = employee;

console.log(firstName, lastName, position); // Output: John Doe Employee

// Function parameter destructuring with default values
function displayUser({ name, role = "User" }) {
  console.log(`Name: ${name}, Role: ${role}`);
}

displayUser(user);

// Swapping variables using destructuring with default values
let var1 = "Hello",
  var2 = undefined;

({ var1, var2 = "World" } = { var1: var2, var2: var1 });

console.log(var1, var2); // Output: World Hello