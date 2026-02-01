console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Expected Output:
// Start
// End
// Promise
// setTimeout

//Note: Promise runs before setTimeout.