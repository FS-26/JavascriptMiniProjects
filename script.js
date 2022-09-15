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
      // resolve(somme);
      setTimeout(() => {
        resolve(somme);
      }, 1000);
    } else {
      reject("Index of Array out of bounds");
    }
  });
  return promesse;
}

/* let prom = sommeTab(2);
prom
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

console.log("Apres promesse"); */

/* console.log(x);

try {
  console.log(x);
} catch (err) {
  console.log(err.message);
} */

let promesse = new Promise(function (resolve, reject) {
  let phrase = "I Love Coding";
  if (phrase.length > 5) {
    let regex = /(\w+) (\w+) (\w+)/g;
    resolve(phrase.replace(regex, "$3 $2 $1"));
  } else {
    reject("Phrase Incorrect");
  }
});

// promesse
//   .then((phrase) => {
//     console.log(phrase);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

/* 
  function asynchrone
  */
async function add(a, b) {
  const res = await (a + b);
  return res;
}

// let s = await add(2, 4);
add(2, 10).then((res) => {
  console.log(res);
});

async function afficherSomme(n) {
  try {
    let res = await sommeTab(n);
    let phRev = await promesse;
    console.log(res, phRev);
  } catch (error) {
    console.log(error);
  }
  return "hello";
}

afficherSomme(3).then((message) => {
  console.log(message);
});
console.log("Apres promise");

// async function remplirTab(n){
//   let tab=[];
//   for(let i=0 ; i<n ;i++){
//     tab[i]=i+1

//   }
//   return tab[i];
// }
// remplirTab(5);

// Sara
function remplirTab(n) {
  let tab = [];

  for (let i = 0; i < n + 1; i++) {
    tab[i] = i + 1;
  }
  return Promise.resolve(tab);
}
/* let prom = remplirTab(5);
prom.then((rem) => {
  console.log(rem);
});
 */
async function tableau(a) {
  let resultat = await remplirTab(a);
  console.log(resultat);
}
tableau(10);
