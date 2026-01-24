let user = {
  name: "Anshu",
  age: 22,
  role: "Developer",
};

for (let key in user) {
  console.log(key, user[key]); // Logs each key and its corresponding value
}

// This code demonstrates how to loop through the properties of an object in JavaScript using a for...in loop. 
// The loop iterates over each key in the 'user' object, and we log both the key and its corresponding value to the console.