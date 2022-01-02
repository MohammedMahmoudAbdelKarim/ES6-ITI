// Example 1:
// ---------

function logArguments() {
  //   let args = Array.prototype.slice.call(arguments);
  //   let type = args.shift();
  //   let base = args.shift();
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

function logArguments(type, base, ...args) {
  console.log(args);
  for (const arg of args) {
    console.log(arg);
  }
}

logArguments("numbers", "base 10", 1, 2, 3, 4, 5);
