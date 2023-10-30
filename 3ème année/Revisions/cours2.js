// Litteral

// function baz({ a, b }) {
//   console.log(a, b);
// }

// console.log(baz({ a: 1, b: 2 }));
// console.log(baz({ b: 1, a: 2 }));

// Le this dans le contexte

// "use strict";

// const o1 = {
//   f1: function () {
//     return this;
//   },
// };

// const o2 = {
//   f2: o1.f1,
// };

// const o3 = o1.f1;

// setTimeout(() => o1.f1(), 1000);

"use strict";

foo();

// On peut call cette fonction avant
function foo() {
  console.log("ok");
}

// On ne peut pas call cette fonction avant
const toto = function () {
  console.log("nok");
};
toto();

setTimeout(function () {});
