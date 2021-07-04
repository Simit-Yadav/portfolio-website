const overlay = document.querySelector(".overlay-div");
const hamburger = document.querySelector(".header__toggle");
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("animate");
    overlay.classList.toggle("show-nav");
    body.classList.toggle("no-scroll");
  });
});
