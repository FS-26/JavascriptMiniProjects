let title = document.querySelector("h2");
let icon = document.querySelector("i");
let paragraph = document.querySelector("#content");

title.addEventListener("click", function () {
  paragraph.classList.toggle("hide");
  if (paragraph.classList.contains("hide")) {
    icon.classList.replace("fa-minus", "fa-plus");
  } else {
    icon.classList.replace("fa-plus", "fa-minus");
  }
});
