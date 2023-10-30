// 05 Exercice ttc

// Créez une fonction qui permet de calculer un prix TTC connaissant un prix HT.
// Donnez une valeur de 20% par défaut pour la TVA.

// Vérifiez que le type des variables passées en paramètre ne posent pas de problème.
// Utilisez parseFloat pour la vérification des types. Affichez les résultats avec au
// plus 2 chiffres après la virgule.

// function ttc(prixHT, tauxTVA = 0.2) {
//   let prixHTFloat = parseFloat(prixHT);
//   let tauxTVAFloat = parseFloat(tauxTVA);

//   if (isNaN(prixHTFloat) || isNaN(tauxTVAFloat)) {
//     return "Wrong type";
//   }

//   let prixTTC = prixHTFloat * (1 + tauxTVAFloat);
//   return parseFloat(prixTTC.toFixed(2));
// }

// // 1.
// console.log(ttc(100, 0.2)); // 120
// console.log(ttc(100.5, 0.2)); // 144.72

// // 2.
// // Gestion du type
// console.log(ttc("hello", 0.2)); // Erreur de type
// console.log(ttc(100.5, "hello")); // Erreur de type
// console.log(ttc("100", ".3")); // 130

// Correction :
function ttc(price, tva = 0.2) {
  if (isNaN(parseFloat(price)) || isNaN(parseFloat(tva)))
    return "Error not a number";
  return Math.floor(price * (1 + tva) * 100) / 100;
}

// console.log(ttc(100, "0.25"));

// Exemple :
// function sum(x, y, z) {
//   return x + y + z;
// }

// let numbers = [1, 2, 3];
// console.log(sum(...numbers));

// Ecrivez une fonction sumTTC qui prend 3 nombres arbitraires de prix
// HT et retourne la somme de ces prix TTC. La TVA est un paramètre
// facultatif (20%). Vérifiez que le type des variables passées en
// paramètre ne posent pas de problème, utilisez parseFloat.
// Affichez les résultats avec au plus 2 chiffres après la virgule.

function sumTTC(prix1, prix2, prix3, tva = 0.2) {
  if (
    isNaN(parseFloat(prix1)) ||
    isNaN(parseFloat(prix2)) ||
    isNaN(parseFloat(prix3))
  ) {
    return "Error not a number";
  }

  const prix1TTC = prix1 * (1 + parseFloat(tva));
  const prix2TTC = prix2 * (1 + parseFloat(tva));
  const prix3TTC = prix3 * (1 + parseFloat(tva));

  const totalTTC = prix1TTC + prix2TTC + prix3TTC;

  return totalTTC.toFixed(2);
}

// Les prix HT seront donnés dans un tableau :
const priceHT = [100.5, 200.8, 55.7];

console.log(sumTTC(...priceHT));
console.log(sumTTC(...priceHT, 0.3));

// vérifiez le type des variables
const badPriceHT = [100.5, "hello", 55.7];
console.log(sumTTC(...badPriceHT, 0.3));
