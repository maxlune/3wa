// 02 Exercice TDZ (temporal dead zone) (sans coder)
// Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.
function tdz() {
  console.log(tdz_val);
  let tdz_val = "Temporal Dead Zone";
}
tdz();

// Réponse :
// Non car on fait un console.log de tdz_val avant de l'initialiser.

// 03 Exercice for let (sans coder)
// Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.
let i = 100;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

// Réponse :
// Oui le code me semble correcte.

// Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.
// Si ce code est valide qu'affichera-t-il ?
for (let j = 0; j < 10; j++) {}
console.log(j);

// Réponse :
// Non car la variable j n'est pas accéssible en dehors de la boucle for
