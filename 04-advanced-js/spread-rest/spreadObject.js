let user = { name: "Anshu" };
let updatedUser = { ...user, role: "MERN Dev" };

console.log(updatedUser); // Output: { name: 'Anshu', role: 'MERN Dev' }

// Merging two objects
let address = { city: "Delhi", country: "India" };
let userWithAddress = { ...user, ...address };

console.log(userWithAddress); // Output: { name: 'Anshu', city: 'Delhi', country: 'India' }

// Overriding properties
let overriddenUser = { ...user, name: "Rahul" };

console.log(overriddenUser); // Output: { name: 'Rahul' }

// Using spread with function arguments
function displayUserInfo(name, role) {
  console.log(`Name: ${name}, Role: ${role}`);
}

let userInfo = ["Anshu", "Developer"];
displayUserInfo(...userInfo); // Output: Name: Anshu, Role: Developer

// Copying an object
let copiedUser = { ...user };

console.log(copiedUser); // Output: { name: 'Anshu' }

// Nested object spread
let employee = {
  id: 101,
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
  },
};

let updatedEmployee = {
  ...employee,
  personalInfo: { ...employee.personalInfo, firstName: "Jane" },
};

console.log(updatedEmployee);
// Output: { id: 101, personalInfo: { firstName: 'Jane', lastName: 'Doe' } }

// Using spread with arrays inside objects
let team = {
  name: "Dev Team",
  members: ["Anshu", "Rahul"],
};

let updatedTeam = {
  ...team,
  members: [...team.members, "Priya"],
};

console.log(updatedTeam);
// Output: { name: 'Dev Team', members: [ 'Anshu', 'Rahul', 'Priya' ] }

// Function parameter destructuring with spread
function displayEmployee({ id, personalInfo: { firstName, lastName } }) {
  console.log(`ID: ${id}, Name: ${firstName} ${lastName}`);
}

displayEmployee(employee); // Output: ID: 101, Name: John Doe

// Swapping properties using destructuring and spread
let obj1 = { prop1: "Value1", prop2: "Value2" };
let obj2 = { prop1: "Value3", prop2: "Value4" };

({ prop1: obj1.prop1, prop2: obj2.prop2 } = { prop1: obj2.prop1, prop2: obj1.prop2 });

console.log(obj1); // Output: { prop1: 'Value3', prop2: 'Value2' }
console.log(obj2); // Output: { prop1: 'Value1', prop2: 'Value4' }
