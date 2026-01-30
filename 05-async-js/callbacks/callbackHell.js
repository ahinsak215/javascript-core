setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// Output:
// Step 1 (after 1 second)
// Step 2 (after 2 seconds)
// Step 3 (after 3 seconds)