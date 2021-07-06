const overlay = document.querySelector(".overlay-div");
const hamburger = document.querySelector(".header__toggle");
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("animate");
    overlay.classList.toggle("show-nav");
    body.classList.toggle("no-scroll");
  });

  let percentage = document.querySelectorAll(".line-bar");
  console.log(percentage);
  percentage.forEach((value) => {
    var line = new ProgressBar.Line(value, {
      color: "#f8bd3b",
      trailColor: "#F5F9FF",
      strokeWidth: 3.1,
      duration: 2000,
      easing: "easeInOut",
    });
    line.animate(value.dataset.percentage / 100);
  });
});
