// Example:
// function delay(callback, duration) {
//   setTimeout(() => {
//     callback();
//   }, duration);
// }

// delay(() => {
//   console.log("First Done!");
//   delay(() => {
//     console.log("Second Done!");
//     delay(() => {
//       console.log("Third Done!");
//     }, 300);
//   }, 300);
// }, 500);

// Promise
let delay = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((x = 1));
    }, duration);
    setTimeout(() => {
      reject("Error");
    }, 200);
  });

delay(300)
  .then(
    (a) => console.log(a)
    //   (error) => console.log(error)
  )
  .catch((error) => {
    console.log(error);
  });

let first = delay(500).then(() => {
  console.log("First Promise");
  return "First";
});
let second = delay(300).then(() => {
  console.log("Second Promise");
  return "Second";
});
let third = delay(200).then(() => {
  console.log("Third Promise");
  return "Third";
});

Promise.all([first, second, third]).then((value) => console.log(value));
