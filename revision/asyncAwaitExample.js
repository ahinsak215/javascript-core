async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!res.ok) {
      throw new Error("Failed request");
    }

    const data = await res.json();
    console.log(data.name);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

fetchUser();

// Explain flow in comments:
// fetch → promise → await → try/catch

// Explanation:
// 1. The `fetchUser` function is declared as an asynchronous function using the `async` keyword, allowing the use of `await` within it.
// 2. Inside the function, we use a `try/catch` block to handle potential errors that may occur during the asynchronous operations.
// 3. We call the `fetch` function with a URL to retrieve user data, which returns a promise.
// 4. The `await` keyword is used to pause the execution of the function until the promise returned by `fetch` is resolved.
// 5. Once the response is received, we check if the response is okay using `res.ok`. If not, we throw an error.
// 6. We then use `await` again to parse the response body as JSON, which also returns a promise.
// 7. After successfully parsing the JSON, we log the user's name to the console.
// 8. If any error occurs during this process, it is caught in the