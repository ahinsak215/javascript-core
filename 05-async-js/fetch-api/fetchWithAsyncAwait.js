async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getPosts();

// This code defines an asynchronous function that fetches a list of posts from a placeholder API 
// and logs the data to the console. It also includes error handling to log any potential errors.