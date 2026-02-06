const title = document.getElementById("title");
const root = document.getElementById("root");

const items = ["JS", "DOM", "Events"];

items.forEach((item) => {
  const div = document.createElement("div");
  div.className = "item";
  div.textContent = item;
  root.appendChild(div);
});


  // Explain:
    // 1. What is event-driven programming?
    // 2. Why addEventListener is preferred?

// Explanation: 
// 1. Event-driven programming is a programming paradigm where the flow of execution is determined by events such as user actions (clicks, key presses), system events (timer events), or messages from other programs.
// 2. `addEventListener` is preferred over inline event handlers because it allows multiple event listeners to be attached to the same element, provides better separation of concerns (HTML and JavaScript are kept separate), and offers more control over event handling (e.g., event bubbling and capturing can be controlled).