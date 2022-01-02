// ---------------------------- Interview Question ❓

// What's the best way to remove duplicate values in this given array and return a new one with only unique values ?

// ES6 Set()

let arr = [1, 2, 3, 4, 5, 6, 6];
let set = new Set(arr);
// set.add(7);
// set.has(3);
// set.delete(3);
// set.size
console.log(set);
