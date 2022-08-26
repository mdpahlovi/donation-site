//   Sticky Navber on scroll

const scrollAmount = 625;

$(window).on("scroll", function () {
    if ($(window).scrollTop() >= scrollAmount && !$("nav").hasClass("sticky-navbar")) {
        $("nav").addClass("sticky-navbar");
    } else if ($(window).scrollTop() < scrollAmount && $("nav").hasClass("sticky-navbar")) {
        $("nav").removeClass("sticky-navbar");
    }
});

// Manu-icon expend on click

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $(".menu").slideToggle();
        $(".fa-bars").toggleClass("fa-x");
    });
});
