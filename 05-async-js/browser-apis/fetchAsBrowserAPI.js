console.log("Fetch starts");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Fetch ends");

// Expected Output:
// Fetch starts
// Fetch ends
// {userId: 1, id: 1, title: "...", body: "..."}