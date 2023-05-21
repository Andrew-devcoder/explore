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
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass("show");
//     } else {
//         btn.removeClass("show");
//     }
// });

// btn.on("click", function (e) {
//     e.preventDefault();
//     $("html, body").animate({ scrollTop: 0 }, "300");
// });
