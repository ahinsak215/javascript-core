// Q1: Function + closure
function outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter());
console.log(counter());

// Explain in comments:
// 1. Why count is not destroyed?
// 2. What is closure here?

// Explanation:
// 1. The variable `count` is not destroyed because it is enclosed within the scope of the inner function returned by `outer()`. This inner function maintains a reference to `count`, even after `outer()` has finished executing. This is known as a closure.
// 2. A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned. In this example, the inner function returned by `outer()` forms a closure over the variable `count`.