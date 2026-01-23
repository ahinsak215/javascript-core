let users = ["A", "B", "C"];
let search = "B";
let found = false;

for (let i = 0; i < users.length; i++) {
  if (users[i] === search) {
    found = true;
    break;
  }
}

console.log(found); // Output: true

// This code checks if a specific element exists in an array.
// It initializes a boolean variable found to false,
// then iterates through each element in the users array.
// If the search element is found, it sets found to true and breaks the loop.
// Finally, it logs the value of found, which will be true if the element exists, otherwise false.