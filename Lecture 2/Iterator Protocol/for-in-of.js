// For - In

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let x in arr) {
//   console.log(arr[x]);
// }

// let obj = { 1: "x", 5: "y", 3: "z" };
// for (let x in obj) {
//   console.log(x + " is " + obj[x]);
// }

// For - of

let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
for (const x of map) {
  console.log(x);
}
