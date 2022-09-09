let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  let poids = Number(inputs[1].value);
  let taille = Number(inputs[0].value) / 100;
  let bmi = (poids / (taille * taille)).toPrecision(4);
  document.querySelector("#resultat").textContent = bmi;
  inputs[0].value = "";
  inputs[1].value = "";
});
