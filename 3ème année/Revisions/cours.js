// let foo = 1;
// foo = "hello";
// console.log(typeof foo);

// const store = new Map();

// store.set("A1", 10.6);
// store.set("A2", 10.6);

// let a = 51;
// let b = 90;
// console.log("Somme ", a + b, " et multiplication ", a * b, " .");
// console.log(`Somme  ${a + b}  et multiplication  ${a * b}.`);

// let isLoading = false;
// const message = `Data is ${isLoading ? "loading" : "done"}`;

// logged = true ? "toujours yes" : "no";

// console.log(logged);

// let a = 11;
// let b = 9;

// function foo() {
//   let a = 10;
//   console.log(a, b);
// }

// foo();

// let a = 1;

// function calcul() {
//   let a = 2 + a;

//   console.log(a, "calcul");

//   function sub_calcul() {
//     let b = a + 1;

//     console.log(b, "sub_calcul");
//   }

//   sub_calcul();
// }

// calcul();

// const students = ["Alan", "Bernard", "Jean"];
// students.push("Sophie");
// console.log(students);
// students.pop();
// console.log(students);

// for (let j = 0; j < 10; j++) {
//   const y = j;
//   console.log(y);
// }

// const STUDENTS = ["Alan", "Bernard", "Jean"];
// // STUDENTS.forEach((x) => console.log(x));

// for (const student of STUDENTS) {
//   console.log(student);
// }

// function add(a, b = 4) {
//   return a + b;
// }

// console.log(add(1, 2));

function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers));
