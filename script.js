document.querySelector("button").addEventListener("click", function () {});

function displayText() {
  document.querySelector("h1").textContent = "CallBack";
}

// function a() {
//   alert("call of A");
// }

// function finished() {
//   alert("Finished my chore!");
// }

// function b(callBack) {
//   alert("call of b");
//   callBack();
// }
// // console.log();
// b(finished);

// setTimeout(displayText, 1000);
setInterval(displayText, 1000);
