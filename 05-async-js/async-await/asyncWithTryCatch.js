async function check() {
  try {
    let result = await Promise.reject("Failed");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

check();

// Output:
// Failed