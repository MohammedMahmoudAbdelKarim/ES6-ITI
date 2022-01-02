// Assign
// let obj1 = {
//   name: "Ahmed",
// };
// // let obj2 = obj1;
// // let obj2 = JSON.parse(JSON.stringify(obj1));
// let obj3 = { title: "Developer" };
// let obj2 = Object.assign({}, obj1, obj3);
// obj2.name = "Mohammed";
// console.log(obj1, obj2);

// Keys / Values
// let tasks = {
//   0: "Clean Home",
//   1: "Buy Groceries",
//   2: "Go Party",
// };
// console.log(Object.values(tasks));

// Seal / Freeze
const myObj = {
  name: "John",
  age: 20,
};

// Object.seal(myObj);
Object.freeze(myObj);

myObj.name = "Mark";
myObj.title = "Developer"; // No Change with Seal

console.log(myObj);
