let data = [1, 2, 2, 3, 4, 4];
let unique = [];

for (let i = 0; i < data.length; i++) {
  if (!unique.includes(data[i])) {
    unique.push(data[i]);
  }
}

console.log(unique); // Output: [1, 2, 3, 4]

// This code removes duplicate values from an array.
// It initializes an empty array named unique,
// then iterates through each element in the data array.
// If the element is not already present in the unique array, it is added.
// Finally, it logs the unique array, which will be [1, 2, 3, 4].