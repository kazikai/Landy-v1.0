// toggle visibility for css3 animations
$(document).ready(function() {
    $('body /deep/ header').addClass('visibility');
    $('body /deep/ .carousel-iphone').addClass('visibility');
    $('body /deep/ .payoff h1').addClass('visibility');
    $('body /deep/ .features .col-md-4').addClass('visibility');
    $('body /deep/ .social .col-md-12').addClass('visibility');
});


//iphone carousel animation
$(window).load(function () {
    $('body /deep/ header').addClass("animated fadeIn");
    $('body /deep/ .carousel-iphone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
        $('body /deep/ .navbar-default').css('display', 'block');
        $('body /deep/ .navbar-default').addClass('fixed-to-top');

    } else if (scrollTop == 0)   {

        $('body /deep/ .navbar-default').removeClass('fixed-to-top');
    }


//animations
    $('body /deep/ .payoff h1').each(function(){

        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+650) {
                $(this).addClass("animated fadeInLeft");
            }

    });

    $('body /deep/ purchase button.app-store').each(function(){

        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+650) {
                $(this).addClass("animated pulse");
            }

    });

    $('body /deep/ .features .col-md-4').each(function(){

        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+650) {
                $(this).addClass("animated flipInX");
            }

    });

    $('body /deep/ .social .col-md-12').each(function(){

        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+550) {
                $(this).addClass("animated fadeInLeft");
            }

    });

    $('body /deep/ .get-it button.app-store').each(function(){

        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+850) {
                $(this).addClass("animated pulse");
            }

    });


});


// Parallax Content

function parallax() {

        // Turn parallax scrolling off for iOS devices

            var iOS = false,
                p = navigator.platform;

            if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
                iOS = true;
            }

        var scaleBg = -$(window).scrollTop() / 3;

        if (iOS === false) {
            $('body /deep/ .payoff').css('background-position-y', scaleBg - 150);
            $('body /deep/ .social').css('background-position-y', scaleBg + 200);
        }

}

function navbar() {

    if ($(window).scrollTop() > 1) {
        $('body /deep/ #navigation').addClass('show-nav');
    } else {
        $('body /deep/ #navigation').removeClass('show-nav');
    }

}

$(document).ready(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560){

        $(window).scroll(function() {
            parallax();
            navbar();
        });

    }

});


$(window).resize(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560){

        $(window).scroll(function() {
            parallax();
            navbar();
        });

    }

});


// iPhone Header Carousel
$('body /deep/ header .carousel').carousel({
  interval: 3000
})

// iPhone Features Carousel
$('body /deep/ .detail .carousel').carousel({
  interval: 4000
})

