// 1- MultiLine

// let tempString =
//   "Line 1 in the string \n" +
//   "Line 2 in the string \n" +
//   "Line 3 in the string";
// console.log(tempString);

// let tempString = `Line 1 in the string
//   Line 2 in the string
//   Line 3 in the string`;
// console.log(tempString);

// 2 - String Interpolation
function sum(x, y) {
  //   console.log(x + " + " + y + " = " + (x + y));
  console.log(`${x} + ${y} = ${x + y}`);
}
sum(1, 3);

// 3- Tagged Template

function myInfo(string, ...data) {
  console.log(string, data);
}

let name = "Mohammed";
let title = "Sr FrontEnd Engineer";

myInfo`My name is ${name}, my title is ${title}`;
