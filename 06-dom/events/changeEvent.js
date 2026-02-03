const _input = document.getElementById("nameInput");

_input.addEventListener("change", () => {
  console.log("Input value changed");
});

// Note: The 'change' event is triggered when the input loses focus after its value has been modified.
// For real-time updates, consider using the 'input' event instead.
