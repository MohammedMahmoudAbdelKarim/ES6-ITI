const food = [
  "Burger",
  "Pizza",
  "Donuts",
  "Pizza",
  "Koshary",
  "Donuts",
  "Seafood",
  "Burger",
];

// A
let foodSet = new Set(food);

// B
foodSet.add("Pasta");
console.log(foodSet);

// C
foodSet.delete("Burger");
console.log(foodSet);

// D
let clearSet = (set) => {
  if (set.size > 2) {
    set.clear();
    return set;
  }
};
