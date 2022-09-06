let button, input, content;
button = document.querySelector("button");
input = document.querySelector("input");
content = document.querySelector("#content");

function displayContent(event) {
  let name = input.value;
  if (name.trim().length > 0) {
    content.textContent += " " + name;
  }
  input.value = "";
}

button.addEventListener("click", displayContent);

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    displayContent(event);
  }
});
