let queue = ["User1", "User2"];
queue.unshift("Admin");
queue.shift();

console.log(queue);

// This code demonstrates the use of unshift and shift methods on an array in JavaScript.
// The unshift method adds "Admin" to the beginning of the queue array,
// and the shift method removes the first element from the array.
// Finally, it logs the modified array, which will be ["User1", "User2"].