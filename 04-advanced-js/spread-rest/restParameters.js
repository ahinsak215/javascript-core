function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15));   // Output: 30

function multiply(factor, ...numbers) {
  return numbers.map(num => num * factor);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5));    // Output: [12, 15]

function createUser(name, age, ...hobbies) {
  return {
    name,
    age,
    hobbies,
  };
}

console.log(createUser("Anshu", 22, "Reading", "Traveling"));
// Output: { name: 'Anshu', age: 22, hobbies: [ 'Reading', 'Traveling' ] }

console.log(createUser("John", 30, "Cooking"));
// Output: { name: 'John', age: 30, hobbies: [ 'Cooking' ] }

function concatenateStrings(...strings) {
  return strings.join(" ");
}

console.log(concatenateStrings("Hello", "world!")); // Output: "Hello world!"
console.log(concatenateStrings("JavaScript", "is", "fun.")); // Output: "JavaScript is fun."

function findMax(...numbers) {
  return Math.max(...numbers);
}

console.log(findMax(1, 5, 3, 9, 2)); // Output: 9
console.log(findMax(-10, -5, -1));    // Output: -1

function logDetails(id, ...details) {
  console.log(`ID: ${id}`);
  console.log("Details:", details);
}

logDetails(101, "John Doe", "Developer", "NYC");
// Output:
// ID: 101
// Details: [ 'John Doe', 'Developer', 'NYC' ]

logDetails(202, "Jane Smith");
// Output:
// ID: 202
// Details: [ 'Jane Smith' ]

// Combining fixed and rest parameters
function orderPizza(size, ...toppings) {
  return {
    size,
    toppings,
  };
}

console.log(orderPizza("Large", "Pepperoni", "Mushrooms"));
// Output: { size: 'Large', toppings: [ 'Pepperoni', 'Mushrooms' ] }

console.log(orderPizza("Medium"));
// Output: { size: 'Medium', toppings: [] }
