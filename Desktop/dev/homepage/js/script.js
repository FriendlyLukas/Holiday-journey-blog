let przycisk = document.querySelector(".przycisk");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

przycisk.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";

});
