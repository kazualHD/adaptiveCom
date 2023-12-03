const container = document.querySelector(".container");
const leftB = document.getElementById("leftB");
const rightB = document.getElementById("rightB");

leftB.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -= 1170;
});

rightB.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += 1170;
});
