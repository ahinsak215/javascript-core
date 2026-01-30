const checkNumber = new Promise((resolve, reject) => {
  let num = 5;
  if (num > 0) resolve("Positive");
  else reject("Negative");
});

checkNumber.then((res) => console.log(res)).catch((err) => console.log(err));

// Output:
// Positive