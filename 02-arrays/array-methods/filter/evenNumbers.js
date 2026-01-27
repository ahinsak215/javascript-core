let nums = [1, 2, 3, 4, 5, 6];

let evens = nums.filter((n) => n % 2 === 0);

console.log(evens); // Output: [2, 4, 6]

// This code uses the filter() method to create a new array 'evens' that contains only the even numbers from the original 'nums' array. 
// The filter() method tests each element of the array with the provided function, and only those elements that return true are included in the new array. 
// In this case, the resulting array 'evens' will be [2, 4, 6].