// function myGenerator() {
//   return 1;
//   return 2;
//   return 3;
// }

// yield == return

// function* myGenerator() {
//   let first = yield 1; // Return value in this line then stop execution till we next it
//   let second = yield 2;
//   let third = yield 3;
//   console.log(first, second, third);
// }

// let gen = myGenerator();
// console.log(gen.next()); // No Value should be assigned
// console.log(gen.next(1));
// console.log(gen.next(2));
// console.log(gen.next(3));
// for (const x of gen) {
//   console.log(x);
// }

let delay = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Promise");
      resolve();
    }, duration);
  });

function* myGenerator() {
  let first = yield delay(400);
  let second = yield delay(4000);
}

let gen = myGenerator();
gen.next();
gen.next();

// interview Question ❓

// What would be the result in console for this code snippet ?

function* genTask() {
  console.log("Hi");
  yield 123;
  console.log("Bye");
}

let iterator = genTask();

iterator.next();
iterator.next();
