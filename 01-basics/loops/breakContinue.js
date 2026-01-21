for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 9) break;
  console.log(i);
}
// This loop will print numbers from 1 to 10,
// but will skip 5 and stop before printing 9.