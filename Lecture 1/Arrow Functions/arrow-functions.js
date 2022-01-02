// Convert this code into arrow functions

// Example 1:
// ----------
// const add = function(x,y) {
// return x + y;
// }

const add = (x, y) => x + y; // Implicit return
// console.log(add(1, 2));

// Example 2:
//-----------
let people = [
  { name: "Ahmed", age: 27 },
  { name: "Ali", age: 22 },
  { name: "Hassan", age: 29 },
  { name: "Ahmed", age: 28 },
  { name: "Karim", age: 39 },
];

// Task :
// We need the sum of the ages of the people between 25 and 30 and their name is Ahmed

// let ageSum = people
//   .filter(function (person) {
//     return person.age > 25 && person.age < 30;
//   })
//   .filter(function (person) {
//     return person.name === "Ahmed";
//   })
//   .map(function (person) {
//     return person.age;
//   })
//   .reduce(function (prev, curr) {
//     return (prev || 0) + curr;
//   });

let ageSum = people
  .filter((person) => person.age > 25 && person.age < 30)
  .filter((person) => person.name === "Ahmed")
  .map((person) => person.age)
  .reduce((prev, curr) => (prev || 0) + curr);

console.log(ageSum);

// Arrow function Rules
// --------------------
// 1- Can't return objects implicitly
// const funcObj = () => ({name: 'Mohammed'})
// console.log(funcObj);

// 2- Can't be used as constructor
// const Func = () => {}
// let f = new Func()

// 3- Does'nt have prototype property
// const funcProperty = () => {}
// funcProperty.prototype.add = () => {}

// 4- Can't affected by .call / .apply
// let adder = {
//   base: 1,
//   add: function (a) {
//     var f = function (v) {
//       return v + this, base;
//     }.bind(this);
//     var b = {
//       base: 2,
//     };
//     return f(a);
// return f.call(b,a);
//   },
// };
// console.log(adder.add(4));

let adder = {
  base: 1,
  add: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };
    return f(a);
    // return f.call(b,a);
  },
};
console.log(adder.add(4));
