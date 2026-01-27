let nums = [1, 2, 3, 4, 5];

let result = nums.filter((num) => num > 3);

console.log(result); // Output: [4, 5]

// This code uses the filter() method to create a new array 'result' that contains only the numbers greater than 3 from the original 'nums' array. 
// The filter() method tests each element of the array with the provided function, and only those elements that return true are included in the new array. 
// In this case, the resulting array 'result' will be [4, 5].