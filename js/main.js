// Mobile Click Drop Down
$('.dropnav > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

// toggle 
$(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".sidenav, .conbody").toggleClass("activated");

    if ($(".sitenav").hasClass("activated")) {
        $(".sitenav").animate({ left: "-100%" }, 100);
    } else {
        $(".sitenav").animate({ left: "0" }, 100);
    }
});


//banner
$('.bannerslider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})