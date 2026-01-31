fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Request failed");
    }
    return res.json();
  })
  .catch((err) => console.log(err.message));

// This code attempts to fetch data from an invalid URL and handles the error by logging an appropriate message to the console.