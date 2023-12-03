const container = document.querySelector(".container");
const leftB = document.getElementById("leftB");
const rightB = document.getElementById("rightB");

leftB.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -= window.innerWidth;
});

rightB.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += window.innerWidth;
});
