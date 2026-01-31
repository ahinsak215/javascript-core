fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is a test",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));


// This code sends a POST request to a placeholder API to create a new post and logs the response data to the console.