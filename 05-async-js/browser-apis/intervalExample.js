let count = 0;

const id = setInterval(() => {
  count++;
  console.log(count);
  if (count === 3) clearInterval(id);
}, 1000);

// Expected Output:
// 1
// 2
// 3