console.log(a);
var a = 10;

// console.log(b);
// let b = 20;

// Explain:
// 1. Why 'a' is undefined?
// 2. Why 'b' throws error?

// Explanation:
// 1. The variable 'a' is declared using 'var', which is hoisted to the top of its scope. However, only the declaration is hoisted, not the initialization. Therefore, when we try to log 'a' before its initialization, it is undefined.
// 2. The variable 'b' is declared using 'let', which is also hoisted but is not initialized until its declaration is evaluated. This creates a "temporal dead zone" from the start of the block until the declaration is processed. Therefore, trying to access 'b' before its declaration results in a ReferenceError.