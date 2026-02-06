// Functions help reuse logic
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Higher-order function
function operate(a, b, operation) {
  return operation(a, b);
}

const result1 = operate(5, 3, add); // 8
const result2 = operate(5, 3, multiply); // 15

console.log(result1);
console.log(result2);