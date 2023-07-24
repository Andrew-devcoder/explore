const buttonToUp = document.querySelector(".button__scroll");
const navbar = document.querySelector(".header");

const changeHeader = () => {
    if (window.pageXOffset > 140 || document.documentElement.scrollTop > 140) {
        buttonToUp.classList.add("visible");
        navbar.classList.add("shrink");
    } else {
        buttonToUp.classList.remove("visible");
        navbar.classList.remove("shrink");
    }
};

const changeHeaderTable = () => {
    if (window.pageXOffset > 80 || document.documentElement.scrollTop > 80) {
        buttonToUp.classList.add("visible");
        navbar.classList.add("shrink--table");
    } else {
        buttonToUp.classList.remove("visible");
        navbar.classList.remove("shrink--table");
    }
};

const progressScrollbar = () => {
    const scroll = window.scrollY;
    const screenWidth = window.innerWidth;
    const gif = document.querySelector(".gif-container");

    const newPosition =
        (scroll /
            (document.documentElement.scrollHeight - window.innerHeight)) *
        (screenWidth - 125);

    gif.style.left = newPosition + "px";
};

window.addEventListener("scroll", progressScrollbar);

window.addEventListener("scroll", function () {
    progressScrollbar();
    if (window.innerWidth <= 825) {
        changeHeaderTable();
    } else {
        changeHeader();
    }
});

buttonToUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
