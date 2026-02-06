const user = {
  name: "Anshu",
  age: 22,
};

// Destructuring
const { name, age } = user;

// Spread
const updatedUser = { ...user, role: "Developer" };

// Rest
const { name: userName, ...otherDetails } = user;

console.log(name); // Anshu
console.log(age); // 22
console.log(updatedUser); // { name: 'Anshu', age: 22, role: 'Developer' }
console.log(userName); // Anshu
console.log(otherDetails); // { age: 22 }