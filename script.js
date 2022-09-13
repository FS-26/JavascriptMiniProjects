let form = document.querySelector("form");
let inputs = form.elements;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(inputs["task"].value);
  //1 creer un li
  let list = document.createElement("li");

  //2 Donner la valeur de l'input au li
  list.textContent = inputs["task"].value;
  //3 recupérer le ul et ajouter le li au ul
  let ul = document.querySelector(".todo-list");
  ul.appendChild(list);

  //4 vider le champ input
  inputs["task"].value = "";

  // Creer le button
  let button = document.createElement("button");
  button.textContent = "Delete";

  // ajouter le bouton au li
  list.appendChild(button);
  // ajouter un événement sur le button
  button.addEventListener("click", function () {
    // supprimer un element
    list.remove();
  });
});
