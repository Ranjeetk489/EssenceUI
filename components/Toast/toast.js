let openBtn = document.querySelector(".toast-btn");
let toast = document.querySelector(".toast-container")
openBtn.addEventListener("click", clickHandler);
function clickHandler() {
    console.log('oi');
    toast.style.display = 'block';
    setTimeout(function () {
        toast.style.display = 'none';
    }, 2000);
}