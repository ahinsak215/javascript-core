const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

fetchData.then((data) => console.log(data));

// Output:
// Data received (after 1 second)