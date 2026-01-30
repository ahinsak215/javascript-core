console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End"); 

// Output:
// Start
// End
// Async Task