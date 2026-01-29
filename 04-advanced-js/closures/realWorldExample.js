function securePassword(password) {
  return function (input) {
    return input === password;
  };
}

const check = securePassword("1234");
console.log(check("1234")); // Output: true
console.log(check("0000")); // Output: false

// Works because of let + closure.
// Output: true and false due to closure capturing 'password' variable from outer scope
