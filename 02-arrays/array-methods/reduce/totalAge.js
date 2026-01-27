let users = [{ age: 20 }, { age: 30 }];

let totalAge = users.reduce((total, user) => {
  return total + user.age;
}, 0);

console.log(totalAge); // Output: 50

// This code uses the reduce() method to calculate the total age of all user objects in the 'users' array. 
// The reduce() method executes the provided function (which adds the accumulator 'total' and the 'age' property of the current 'user' object) for each element in the array, 
// resulting in a single output value. Here, we initialize the accumulator to 0, and the final total age is stored in the 'totalAge' variable, which is then logged to the console.