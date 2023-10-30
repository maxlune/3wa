// 09 Créez une fonction zip

// La fonction zip prend en paramètre deux tableaux de même dimension et crée
// des couples de 2 éléments terme à terme, et retourne un tableau des couples.
// console.log(zip([1, 2], [3, 4]));

// function zip(tab1, tab2) {
//   const result = [];
//   for (let i = 0; i < tab1.length || i < tab2.length; i++) {
//     result.push([tab1[i], tab2[i]]);
//   }
//   return result;
// }

//[[1,3], [2, 4]]

// 10 Objet add

// Créez un objet Add qui additionne soit deux entiers soit une liste de nombre(s),
// voyez un exemple d'utilisation ci-dessus :
const Add = {
  a: 0,
  b: 0,
  numbers: [],
  sum: function () {
    let total = this.a + this.b;
    if (this.numbers.length > 0) {
      total += this.numbers.reduce((acc, num) => acc + num);
    }
    return total;
  },
  reset: function () {
    this.a = 0;
    this.b = 0;
    this.numbers = [];
  },
};

Add.a = 10;
console.log(Add.a);
Add.b = 20;
console.log(Add.b);

console.log(Add.sum()); // 30

Add.numbers = [1, 2, 4];

console.log(Add.sum()); // 37

Add.reset();

console.log(Add.sum());

console.log((Add.numbers = [1, 2, 4]));

console.log(Add.sum()); // 7

// 11 Exercice de synthèse corrigé un effet de bord

// Comment éviter l'effet de bord sur la propriété this (undefined) dans le code suivant?
// Proposez une solution.
const log = {
  count: 100,
  save: function () {
    "use strict";
    console.log(this.count);
  },
};
setTimeout(() => log.save, 500);
