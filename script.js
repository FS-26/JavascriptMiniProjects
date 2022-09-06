let body = document.body;
let btn = document.querySelector("button");
let colors = ["red", "green", "blue", "gray", "white", "light-gray", "pink"];

function changeBgColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomIndex];
}
setInterval(changeBgColor, 2000);
btn.addEventListener("click", changeBgColor);
