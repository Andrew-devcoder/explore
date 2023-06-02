const buttonToUp = document.querySelector(".button__scroll");
const gif = document.querySelector(".gif-container");
const navbar = document.querySelector(".header");

function changeHeader() {
    if (window.pageXOffset > 200 || document.documentElement.scrollTop > 200) {
        buttonToUp.classList.add("visible");
        navbar.classList.add("shrink");
    } else {
        buttonToUp.classList.remove("visible");
        navbar.classList.remove("shrink");
    }
}

function progressScrollbar() {
    let scroll = this.scrollY;
    if (scroll === 0) {
        gif.style.left = scroll - 125 + "px";
    } else if (scroll > 0) {
        gif.style.left = scroll - 35 + "px";
    }
}

window.addEventListener("scroll", function () {
    changeHeader();
    progressScrollbar();
});
