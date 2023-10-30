// function sum() {
//   let total = 0;
//   for (i = 0; i < arguments.length; i++) total += arguments[i];
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// function sum2() {
//   const args = Array.from(arguments);
//   return args;
// }

// console.log(sum2(1, 2, 3, 4, 5));

// function sum3() {
//   return arguments;
// }

// console.log(sum3(1, 2, 3, 4, 5));

// function sum4() {
//   const args = Array.from(arguments);
//   return args.reduce((acc, curr) => acc + curr);
// }

// console.log(sum4(1, 2, 3, 4, 5));

// // Map
// const power2 = (x) => {
//   return x ** 2;
// };
// const numbers = [1, 2, 5];
// console.log(numbers.map(power2));

// const sum = (x, y) => x + y;
// console.log(sum(1, 2));

// // Litteraux
// const sum2 = (x, y) => ({ x, y });
// console.log(sum2(2, 4));

// // Tableaux
// let fruits = ["apple", "orange"];
// let newFruits = fruits;
// newFruits.push("Banana");
// console.log(fruits);

// let fruits = ["apple", "orange"];
// // const newFruits = [];

// // ça
// for (const fruit of fruits) {
//   newFruits.push(fruit);
// }
// // = à ça
// const newFruits = [...fruits];

// console.log(fruits);
// newFruits.push("Banana");
// console.log(newFruits);

// Map
// const sheeps = [1, 2, 3];

// const newSheeps = sheeps.map((sheep) => sheep + sheep);

// console.log(newSheeps);

//  Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.filter((number) => number > 4));

// Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((acc, curr) => curr + acc, 0);
console.log(total);
