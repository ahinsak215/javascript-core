let arr = [1, 2, 3, 4];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed); // Output: [4, 3, 2, 1]

// This code reverses the elements of an array.
// It initializes an empty array named reversed,
// then iterates through the original array arr from the last element to the first,
// pushing each element into the reversed array.
// Finally, it logs the reversed array, which will be [4, 3, 2, 1].