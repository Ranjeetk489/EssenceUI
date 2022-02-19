let prev = document.getElementById("prev");
let next = document.getElementById("next");
let i = 1;

prev.addEventListener("click", prevClickHandler);
next.addEventListener("click", clickHandler);

function clickHandler() {
  document.getElementById("img" + i).classList.remove("active");
  document.getElementById("btnn" + i).classList.remove("actBtn");
  document.getElementById("img" + (i + 1)).classList.add("active");
  document.getElementById("btnn" + (i + 1)).classList.add("actBtn");
  i = i + 1;
}

function prevClickHandler() {
  document.getElementById("img" + i).classList.remove("active");
  document.getElementById("btnn" + i).classList.remove("actBtn");
  document.getElementById("img" + (i - 1)).classList.add("active");
  document.getElementById("btnn" + (i + -1)).classList.add("actBtn");
  i = i - 1;
}
