const nums = [1, 2, 3, 4];

// map
const doubled = nums.map((n) => n * 2);

// filter
const even = nums.filter((n) => n % 2 === 0);

// reduce
const sum = nums.reduce((acc, n) => acc + n, 0);

// forEach
const forEachResult = nums.forEach((n) => console.log(n));

// find
const firstEven = nums.find((n) => n % 2 === 0);

// some
const hasEven = nums.some((n) => n % 2 === 0);

// every
const allEven = nums.every((n) => n % 2 === 0);

console.log({ doubled, even, sum, forEachResult, firstEven, hasEven, allEven });

// Output:
// 1
// 2
// 3
// 4
// { doubled: [ 2, 4, 6, 8 ],
//   even: [ 2, 4 ],
//   sum: 10,
//   forEachResult: undefined, // forEach always returns undefined
//   firstEven: 2,
//   hasEven: true,
//   allEven: false 
// }