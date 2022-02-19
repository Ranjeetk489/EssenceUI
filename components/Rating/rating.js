let rating = document.querySelectorAll(".rating");
const starRating = [...document.getElementsByClassName("fa-star")];

let prevIndex = 0;

starRating.forEach(function (item, index) {
    let items = starRating;
    item.addEventListener("click", function () {
        console.log(index);
        if (index > prevIndex) {
            items.slice(0, index + 1).forEach(function (item) {
                item.classList.remove("fa-regular");
                item.classList.add("fa-solid");
            });
        } else {
            items.forEach(function (item) {
                item.classList.remove("fa-solid");
                item.classList.add("fa-regular");
            });
            items.slice(0, index + 1).forEach(function (item) {
                item.classList.add("fa-solid");
            });
        }
        prevIndex = index;
        console.log(prevIndex);
    });
});
