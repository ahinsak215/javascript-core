// DOM manipulation example (revision summary)

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  button.textContent = "Clicked!";
});

//Note: This is a simple example of DOM manipulation similar to the one in js-todo-app/script.js,
// but it doesn't include event handling or dynamic updates like the todo app does.