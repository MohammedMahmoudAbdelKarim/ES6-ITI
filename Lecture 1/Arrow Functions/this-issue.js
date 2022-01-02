// Arrow function resolve the problem of this

// function Person() {
//   let that = this;
//   this.age = 20; // that.age
//   setInterval(function () {
//     this.age++; // that.age
//   }, 500); // bind(this)
// }

// var p = new Person();
// console.log(p.age);

// setInterval(function () {
//   console.log(p.ageSum);
// }, 500);

function Person() {
  this.age = 20; // that.age
  setInterval(() => {
    this.age++; // that.age
  }, 500); // bind(this)
}

var p = new Person();
console.log(p.age);

setInterval(function () {
  console.log(p.ageSum);
}, 500);
