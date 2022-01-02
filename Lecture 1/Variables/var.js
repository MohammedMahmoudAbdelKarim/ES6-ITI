// ----------------------- VAR Problems 🐛 -----------------------
// 1- Hoisting
function testVar() {
  var x;
  x = 10;

  // 2- Can be used several times
  if (true) {
    var x = 10;
  }

  // 3- Function scope VS Block scope
  function test() {
    var x = 12;
  }

  for (var x = 0; x < 10; i++) {
    console.log(x);
  }

  console.log(x);
  x = 50;
}
