function createFunctions() {
  let arr = [];

  for (let i = 1; i <= 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

let funcs = createFunctions();
funcs[0](); // Output: 1
funcs[1](); // Output: 2
funcs[2](); // Output: 3

// Output: 1, 2, 3 due to closure capturing 'i' variable from each iteration of the loop