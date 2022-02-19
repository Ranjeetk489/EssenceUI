let openModal = document.querySelector(".modal-open");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal-close");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
