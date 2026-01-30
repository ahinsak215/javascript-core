function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});

// Output:
// Data received (after 1 second)
