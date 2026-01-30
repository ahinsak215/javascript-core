function calculate(a, b, callback) {
  callback(a + b);
}

calculate(5, 3, (result) => {
  console.log(result);
});

// Output:
// 8