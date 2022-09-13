let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputs = form.elements;
  checkField(inputs["nom"]);
  checkField(inputs["email"]);
  checkEmail(inputs["email"]);
});

function checkEmail(field) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}$/;
  if (regex.test(field.value)) {
    field.className = "is_valid";
    if (document.querySelector("input+.invalid_message")) {
      document.querySelector("input+.invalid_message").remove();
    }
  } else {
    field.className = "is_invalid";
    if (!document.querySelector("input+.invalid_message")) {
      let div = document.createElement("div");
      div.textContent = "Please Enter a valid Email";
      div.className = "invalid_message";
      field.after(div);
    }
  }
}

function checkField(field) {
  if (field.value.length == 0) {
    field.className = "is_invalid";
  } else {
    field.className = "is_valid";
    return field.value;
  }
}
