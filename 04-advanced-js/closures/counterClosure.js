function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3

// Output: 1, 2, 3 due to closure capturing 'count' variable from outer scope
