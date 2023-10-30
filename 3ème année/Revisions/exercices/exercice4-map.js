// Soit numbers une liste de nombres entiers,
// élevez uniquement à la puissance 3 les nombres pairs.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.map((number) => {
//   if (number % 2 === 0) {
//     return number ** 3;
//   }
//   return number;
// });

// ou
const result = numbers.map((number) =>
  number % 2 === 0 ? number ** 3 : number
);

console.log(result.join(", "));
