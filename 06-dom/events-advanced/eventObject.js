const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  console.log("Event type:", e.type);
  console.log("Target:", e.target);
});

// Note: The event object 'e' provides useful information about the event.
// In this example, we log the type of event and the target element that triggered the event.
