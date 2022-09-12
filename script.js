let heading1 = document.querySelector("h1");
let text;
text = "I am fullstack Developer";
let i = 0;

function typeWrite() {
  if (i < text.length) {
    heading1.textContent += text.charAt(i);
    i++;
    setTimeout(typeWrite, 100);
  } else {
    setTimeout(function () {
      heading1.textContent = "";
      i = 0;
    }, 2000);
  }
}
setInterval(typeWrite, 1000);
// typeWrite();
