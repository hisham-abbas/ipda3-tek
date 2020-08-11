$(document).ready(function() {
    $(".services-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            650: {
                items: 2
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
});