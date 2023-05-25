window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".header");
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

const buttonToUp = document.querySelector(".button__scroll");

window.addEventListener("scroll", () => {
    if (window.pageXOffset > 200 || document.documentElement.scrollTop > 200) {
        buttonToUp.classList.add("visible");
    } else {
        buttonToUp.classList.remove("visible");
    }
});

buttonToUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
