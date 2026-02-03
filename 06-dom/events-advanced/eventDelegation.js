const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

// Note: This example demonstrates event delegation, where a single event listener
// is added to a parent element (the list). It checks if the clicked target is
// a list item (LI) and handles the event accordingly. This approach is efficient
// for managing events on dynamically added elements.