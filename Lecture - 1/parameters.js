// Speard
// Example 1
// ---------
// function sum(x, y, z) {
//   return x + y + z;
// }

// let inputs = [1,2,3];
// console.log(sum(...inputs));

// Example 2
// ---------
// console.log(Math.max(...[-1, 100, 9001, -32])); // 9001

// Example 3
// --------- Deep Copy
// let arr = [1, 2, 3];
// let copiedArr = [...arr];
// copiedArr.push(4);
// console.log(arr, copiedArr);

// Example 4
// ---------
let cities = ["San Francisco", "Los Angeles"]
let places = ["Miami", ...cities, "Chicago"]

console.log(places)

// Rest
// Example
// ---------
let numbers = [1, 2, 3, 4, 5]
function sumUp(toAdd) {
  let result = 0
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i]
  }
  return result
}
console.log(sumUp(numbers))
console.log(sumUp(100, 10, 20))
