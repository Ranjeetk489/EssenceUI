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

//List
let showMore = document.querySelector(".stack-show");
let showListItem1 = document.querySelector(".stack-item1");
let showListItem2 = document.querySelector(".stack-item2");

let flag = "true";
showMore.addEventListener("click", () => {
  if (flag) {
    showListItem1.style.display = "block";
    showListItem2.style.display = "block";
    showMore.innerText = "Show Less";
    flag = !flag;
  } else {
    showListItem1.style.display = "none";
    showListItem2.style.display = "none";
    showMore.innerText = "Show More";
    flag = !flag;
  }
});
