console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output will be:
// Start
// End
// Promise
// Timeout

// Explanation:
// 1. "Start" is logged immediately.
// 2. The `setTimeout` callback is scheduled to run after the current call stack is empty, so it goes to the macrotask queue.
// 3. The `Promise` callback is scheduled to run after the current call stack is empty but before any macrotasks, so it goes to the microtask queue.
// 4. "End" is logged immediately after "Start".
// 5. The event loop first processes the microtask queue, so "Promise" is logged next.
// 6. Finally, the event loop processes the macrotask queue, logging "Timeout".