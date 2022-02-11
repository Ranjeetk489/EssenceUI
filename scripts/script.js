let menu = document.querySelector(".menu-icon");
let cross = document.querySelector(".close-icon");
let navbar = document.querySelector(".navbar");
let input = document.querySelector(".query-bar");
let inpBtn = document.querySelector(".search-btn");
let newsletter = document.querySelector(".ftr-newsletter-email-subscribe");
let subscribe = document.querySelector(".ftr-newsletter-btn");

menu.addEventListener("click", () => {
  if (window.screen.width < 600) {
    menu.style.display = "none";
    cross.style.display = "block";
    navbar.style.display = "block";
  }
});

cross.addEventListener("click", () => {
  if (window.screen.width < 600) {
    cross.style.display = "none";
    navbar.style.display = "none";
    menu.style.display = "block";
  }
});

window.addEventListener("resize", function () {
  if (screen.width > 580 && screen.width < 610) {
    ("use strict");
    window.location.reload();
  }
});
