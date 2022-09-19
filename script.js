/* 
localStorage
*/
// // ajouter ou modifier un élément
// window.localStorage.setItem("nom", "Touria");
// window.localStorage.setItem("nom1", "Amine");
// window.localStorage.setItem("nom3", "Houda");

// récupération de l'élément grâce à la clé
/* let myName = localStorage.getItem("nom");
let myName2 = localStorage.getItem("nom2");
console.log(myName, myName2); */
// Suppression de l'élement
// localStorage.removeItem("nom");

// Vider le localstorage
// localStorage.clear();
// Session storage

// sessionStorage.setItem("mode", "dark");

// let user = {
//   nom: "Ablam",
//   prenom: "Polarus",
// };
// let userString = JSON.stringify(user);
// console.log(userString);
// localStorage.setItem("user", userString);

// let data = localStorage.getItem("user");
// console.log(JSON.parse(data));

// let numbers = [1, 20, 30, -1];
// localStorage.setItem("numbers", JSON.stringify(numbers));
let data = localStorage.getItem("numbers");
console.log(JSON.parse(data));
