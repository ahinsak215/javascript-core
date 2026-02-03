const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted without refresh");
});

// Note: The 'submit' event is triggered when the form is submitted.
// Using e.preventDefault() prevents the default form submission behavior, which usually refreshes the page.