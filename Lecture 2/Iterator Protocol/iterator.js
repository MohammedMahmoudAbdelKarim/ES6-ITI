// let str = "Mohammed";
// console.log(str[Symbol.iterator]().next());

// let someString = new String("Hi");

// someString[Symbol.iterator] = function () {
//   return {
//     next: function () {
//       if (this._first) {
//         this._first = false;
//         return { vlaue: "Bye", done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true,
//   };
// };

// let iterator = someString[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
