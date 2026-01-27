let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // Output: 10

// This code uses the reduce() method to calculate the sum of all numbers in the 'nums' array. 
// The reduce() method executes the provided function (which adds the accumulator 'acc' and the current value 'curr') for each element in the array, 
// resulting in a single output value. Here, we initialize the accumulator to 0, and the final sum of the array elements is stored in the 'sum' variable, which is then logged to the console.