let resultat = document.querySelector("p");
let btns = document.querySelectorAll("button");

function increment() {
  resultat.textContent = ++count;
  changeColor();
}

const reset = () => {
  count = 0;
  resultat.textContent = count;
  changeColor();
};

function decrement() {
  resultat.textContent = --count;
  changeColor();
}

function changeColor() {
  if (count > 0) {
    resultat.style.color = "green";
  } else if (count == 0) {
    resultat.style.color = "blue";
  } else {
    resultat.style.color = "red";
  }
}

btns[0].addEventListener("click", increment);
btns[1].addEventListener("click", reset);
btns[2].addEventListener("click", decrement);
