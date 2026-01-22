for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// This code demonstrates a common scope problem in JavaScript.
// The variable i is declared with var, which has function scope,
// causing the logged value to be 4 in all iterations after 1 second.