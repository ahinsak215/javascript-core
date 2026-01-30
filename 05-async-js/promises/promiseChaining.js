const task = new Promise((resolve) => {
  resolve(2);
});

task.then((num) => num * 2).then((result) => console.log(result));

// Output:
// 4