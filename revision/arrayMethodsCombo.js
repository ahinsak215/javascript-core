const users = [
  { name: "A", age: 17, active: true },
  { name: "B", age: 22, active: false },
  { name: "C", age: 25, active: true },
];

// Get total age of active users above 18
const result = users
  .filter((user) => user.age > 18 && user.active)
  .map((user) => user.age)
  .reduce((sum, age) => sum + age, 0);

console.log(result); // 25

// Explain:
// Why filter → map → reduce order matters?

// Explanation:
// 1. The `filter` method is used first to narrow down the array to only those users who are above 18 and active. This reduces the number of items we need to process in the subsequent steps.
// 2. The `map` method is then used to transform the filtered array of user objects into an array of ages. This step is necessary because we only want to sum the ages, not the entire user objects.
// 3. Finally, the `reduce` method is used to sum up the ages from the mapped array. If we had changed the order of these methods, we would have either tried to map before filtering (which would include unwanted users) or reduce before mapping (which would not work since we would be trying to sum user objects instead of ages). Therefore, the order of filter → map → reduce is crucial for achieving the correct result efficiently.