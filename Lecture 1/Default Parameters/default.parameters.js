const PI = 3.14159265359;

function isRequired(param) {
  throw param + " is required";
}

function circleArea(radius = isRequired("Raduis"), decimalLength = 2) {
  return (PI * Math.pow(radius, 2)).toFixed(decimalLength);
}

console.log(circleArea(3, 2));
