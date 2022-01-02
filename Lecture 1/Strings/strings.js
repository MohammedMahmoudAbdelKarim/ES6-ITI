let str = "This is the example of strings, not about match";
// console.log(str.indexOf("strings") > -1);

// includes: Check if this sentence has the word strings:
console.log(str.includes("strings"));

// StartWith: Find the words that start with 'th':
// endWith: Find the words that start with 'th':
let arr = str.split(" ");
for (let word of arr) {
  //   if (word.indexOf("th") === 0) console.log(word);
  if (word.startsWith("th")) console.log(word);
  if (word.endsWith(",")) console.log(word);
}

// Iterator
console.log(...str);

// repeat: Print a triangle like this
// *
// **
// ***
// ****

function stars(n = 4) {
  for (let x = 1; x <= n; x++) {
    let line = "";
    // for (let y = n; y > x; y--) {
    //   line += " ";
    // }
    // for (let z = 1; z <= x; z++) {
    //   line += "*";
    // }
    line += " ".repeat(n - x);
    line += "*".repeat(x);
    console.log(line);
  }
}

stars(5);
