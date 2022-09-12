let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputs = form.elements;
  let invMess = document.querySelector(".invalid_message");
  if (inputs["nom"].value.length == 0) {
    inputs["nom"].className = "is_invalid";
    invMess.textContent = "Le champ Nom est Obligatoire";
  } else {
    inputs["nom"].className = "is_valid";
    invMess.textContent = "";
    // recuperation de la valeur saisi qui est valide
    const nom = inputs["nom"].value;
    console.log(nom);
  }
  const email = form.elements["email"].value;
});
