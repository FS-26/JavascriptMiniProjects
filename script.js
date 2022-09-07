let icon = document.querySelector("i");
let paragraph = document.querySelector("#content");

icon.addEventListener("click", function () {
  paragraph.classList.remove("hide");
  if (paragraph.classList.contains("hide")) {
    icon.classList.replace("fa-minus", "fa-plus");
  } else {
    icon.classList.replace("fa-plus", "fa-minus");
  }
});
