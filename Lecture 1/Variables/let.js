// ----------------------- Let -----------------------
// 1- Hoisting
function testVar() {
  let x = 10;

  // if (true) {
  //   let x = 10; // Block Scope
  // }

  // function test() {
  //   var x = 12;
  // }

  // for (var x = 0; x < 10; i++) {
  // let x = 5;
  //   console.log(x);
  // }

  // var x = 11; // No Hoisting

  console.log(x);
}
