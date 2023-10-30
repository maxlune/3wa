// 03 Exercice populations
const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

// Parcourez le tableau populations et ajoutez un champ count qui
// compte le nombre d'occurence(s) de a et de l dans les noms.
// Utilisez un for of.
for (const person of populations) {
  const countA = person.name.split("").filter((x) => x === "a").length;
  person.countA = countA;

  const countL = person.name.split("").filter((x) => x === "l").length;
  person.countL = countL;
}
console.log(
  `Parcourez le tableau populations et ajoutez un champ count qui
  compte le nombre d'occurence(s) de a et de l dans les noms.
  Utilisez un for of.`,
  populations
);

// Ordonnez maintenant le tableau par ordre croissant de nombre de a et
// l dans les noms.
populations.sort((a, b) => b.countA - a.countA || b.countL - a.countL);

console.log(
  `Ordonnez maintenant le tableau par ordre croissant de nombre de a et l 
  dans les noms.`,
  populations
);

// 04 Exercice max (challenge)

// Soit le tableau d'entiers suivant :
const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

// 05 Exercice reduce sum impair (challenge)
// Utilisez la méthode reduce pour calculer le max.
const maxNumber = numbers.reduce((acc, curr) => acc + curr);

console.log(`Utilisez la méthode reduce pour calculer le max : `, maxNumber);

// Faites la somme des nombres impairs en utilisant la fonction
// reduce des valeurs suivantes :
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddSum = numbers2.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    return acc + curr;
  }
  return acc;
}, 0);

console.log(
  `Faites la somme des nombres impairs en utilisant la fonction reduce : `,
  oddSum
);

// 06 Exercice fonction map sur un littéral

// Utilisez la fonction map pour calculer le prix TTC des téléphones.
// Utilisez une fonction fléchée.
const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];
const result = phones.map((phone) => {
  return phone.priceHT * 1.2;
});

console.log(
  `Utilisez la fonction map pour calculer le prix TTC des téléphones. 
  Utilisez une fonction fléchée : `,
  result
);

// 07 Exercice square numbers

// Soit le point A suivant, calculez la distance de ce point à
// l'ensemble de chaques points de la liste positions.
// Vous donnerez les résultats dans un nouveau tableau distances.
const A = [8.3, 7.5];
const positions = [
  [1, 1],
  [2, 2],
  [3, 4.5],
  [0, 9],
];
const distances = [];

const distanceBetweenAandPosition = positions.map((x) => {
  const x1 = A[0];
  const x2 = x[0];
  const y1 = A[1];
  const y2 = x[1];

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
});
console.log(
  `Soit le point A suivant, calculez la distance de ce point à
  l'ensemble de chaques points de la liste positions.
  Vous donnerez les résultats dans un nouveau tableau distances : `,
  distanceBetweenAandPosition
);

// Rappelons comment on effectue le calcul de la distance avec une
// précision de deux chiffres après la virgule :
// const X = [1, 2];
// const B = [4, 1.5];

// const d =
//   Math.floor(Math.square((X[0] - B[0]) ** 2 + (X[1] - B[1]) ** 2) * 100) / 100;

// Trouvez le point le plus éloigné du point A.

const maxDistanceFromA = distanceBetweenAandPosition.reduce((acc, curr) => {
  return Math.max(acc, curr);
}, 0);
console.log(maxDistanceFromA);

// 08 Exercice string

// Inversez la chaîne de caractères sentence ci-après.
const sentence = "Bonjour tout le monde, vous aimez JS";

const sentenceArray = sentence.split("");
const sentenceArrayReverse = sentenceArray.reverse();
const sentenceReverse = sentenceArrayReverse.join("");
console.log(`Inversez la chaîne de caractères sentence : `, sentenceReverse);

// Comptez le nombre de caractères de chaque mot.
const sentenceArray2 = sentence.split(" ");
const eachWordMaxChar = sentenceArray2.forEach((word) => {
  console.log(`Nombre de caractères de ${word} : `, word.length);
});

// Faites un script qui prend en argument une phrase et qui retourne
// dans un tableau le nombre de caractères de chaque mot.
// Vous ne compterez pas les espaces comme un caractère.
// Indication : utilisez la méthode split pour transformer la chaîne de
// caractères en tableau.
