// Promise
fetchData().then((data) => console.log(data));

// Async/Await
async function run() {
  const data = await fetchData();
  console.log(data);
}
run();

// Output:
// Data received (after 1 second)