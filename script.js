/*
Exercice 1
Creer une fonction qui prend en paramètre un nombre entier 'nbre' et 
retourne une promesse.
La promesse est résolu si 'nbre' est paire, on renvoie le carré du nombre , sinon on renvoie comme message "nombre impaire" => rejet 

Exercice 2
Creer une fonction nommée sommeTab qui prendre en paramètre le nombre d'element à addtionner dans un tableau retourne un promesse.
La promesse est résolu si le nbre entré en parametre est inférieur à la taille du tableau et supérieur à 0
La promesse est rejeté si le nbre entré en parametre est <= 0 ou > taille du tableau
exemple de tableau [2, 10, 30, 4, -1, 0]
-nbre entré = 4 => 2+10+30+4
resultat: 46

-nbre entré = -1
message = "Index of Array out of bounds";

Exercice 3
Ecrire une promesse qui renverse l'ordre des mots d'une phrase et renvoie 
le resultat si la taille de la phrase est supérieur à  5  sinon renvoie un message "Phrase incorrect" 

exemple
phrase = "I Love You"
resultat = You Love I
*/

function sommeTab(n) {
  let nombres = [2, 10, 30, 4, -1, 0];
  let somme = 0;
  // creation de promesse
  let promesse = new Promise(function (resolve, reject) {
    // effectuer la somme
    if (n <= nombres.length && n > 0) {
      for (let i = 0; i < n; i++) {
        somme = somme + nombres[i];
      }
      resolve(somme);
    } else {
      reject("Index of Array out of bounds");
    }
  });
  return promesse;
}
/* 
let prom = sommeTab(1);
prom
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  }); */

let promesse = new Promise(function (resolve, reject) {
  let phrase = "I Love Coding";
  if (phrase.length > 5) {
    let regex = /(\w+) (\w+) (\w+)/g;
    resolve(phrase.replace(regex, "$3 $2 $1"));
  } else {
    reject("Phrase Incorrect");
  }
});

promesse
  .then((phrase) => {
    console.log(phrase);
  })
  .catch((message) => {
    console.log(message);
  });
