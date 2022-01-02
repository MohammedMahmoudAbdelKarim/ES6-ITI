// let name = "Mohammed";
// let title = "Front-End Developer";
// let hobby = "Photography";

// let info = { name, title, hobby };
// console.log(info);

// Function
let calculator = {
  //   sum: function (x, y) {
  //     return x + y;
  //   },
  sum(x, y) {
    return x + y;
  },
  //   sub: function (x, y) {
  //     return x - y;
  //   },
  sub(x, y) {
    return x - y;
  },
};

console.log(calculator.sum(1, 3));
