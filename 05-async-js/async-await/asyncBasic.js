function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();

// Output:
// Data received (after 1 second)