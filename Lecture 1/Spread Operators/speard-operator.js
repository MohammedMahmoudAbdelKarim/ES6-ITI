// Example 1: 
// ----------
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3)]);
// -----------------------------------------------
//  Example 2:
// ----------
console.log(Math.max(5,3,9,1,6));
console.log(Math.max(...[5,3,9,1,6]));
// -----------------------------------------------
//  Example 3:
// ----------
let arr = [1,2,3];
let copiedArr = [...arr]
// let copiedArr = arr
// copiedArr.push(4)
console.log(arr,copiedArr);
// -----------------------------------------------
//  Example 4:
// ----------
let cities = ['Alexandria', 'Cairo'];
let places = ['Aswan', 'Sharm El-Shiekh', ...cities]