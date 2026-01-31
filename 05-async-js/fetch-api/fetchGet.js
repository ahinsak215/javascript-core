fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// This code fetches a list of posts from a placeholder API and logs the data to the console.