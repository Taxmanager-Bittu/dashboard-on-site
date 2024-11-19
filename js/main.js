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

// Banner Slider
$('.bannerslider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1 // Ensures only one item is displayed
});