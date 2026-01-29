function outer() {
  let name = "Anshu";

  function inner() {
    console.log(name);
  }

  return inner;
}

const fn = outer();
fn();

// Output: Anshu due to closure capturing 'name' variable from outer scope