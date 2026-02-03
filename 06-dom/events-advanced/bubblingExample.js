document.getElementById("container").addEventListener("click", () => {
  console.log("Container clicked");
});

document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked");
});

// Note: This example demonstrates event bubbling, where a click on the button
// also triggers the click event on its parent container. Events propagate
// from the innermost target element up through its ancestors in the DOM tree.