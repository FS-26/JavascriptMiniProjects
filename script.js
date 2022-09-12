let select = document.querySelector("select");
let checkBox = document.querySelector("input");
let spans = document.querySelectorAll("span");
let pSign = document.getElementById("sign");
let numb1;
let numb2;
let result;
numb1 = getRandomNumber();
numb2 = getRandomNumber();
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

spans[0].textContent = numb1;
spans[1].textContent = numb2;
result = numb1 + numb2;
spans[2].textContent = result;

select.addEventListener("change", function () {
  console.log(event.target);
  // console.log(select.value);
  let sign = select.value;
  pSign.textContent = sign;
  switch (sign) {
    case "+": {
      result = numb1 + numb2;
      break;
    }

    case "-": {
      result = numb1 - numb2;
      break;
    }
    case "*": {
      result = numb1 * numb2;
      break;
    }
    case "/": {
      result = numb1 / numb2;
      break;
    }
    default:
      result = numb1 + numb2;
      break;
  }
  spans[2].textContent = result;
});

// CheckBox Event

checkBox.addEventListener("change", function (e) {
  // console.log(e);
  console.log(checkBox.checked);
});
