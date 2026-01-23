let numbers = [3, 7, 2, 9, 5];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // Output: 9

// This code finds the maximum number in an array of numbers.
// It initializes the maximum value with the first element of the array,
// then iterates through the rest of the elements, updating the maximum value when a larger number is found.
// Finally, it logs the maximum number, which is 9 in this case.