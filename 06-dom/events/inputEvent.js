const input = document.getElementById("nameInput");
const output = document.getElementById("output");

input.addEventListener("input", (e) => {
  output.textContent = e.target.value;
});

// Note: The 'input' event is triggered every time the value of the input changes.
// It provides real-time updates as the user types.