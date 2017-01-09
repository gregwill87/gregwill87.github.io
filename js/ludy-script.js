$(document).ready(function() {
    $ludyTrigger = $('.ludy-trigger');
    $ludyWrapper = $('.ludy-wrapper');

    $ludyTrigger.on('click', function () {
        $(this).slideUp(300, function () {
            $ludyWrapper.slideDown(300);
        });
    });
    /* ========== SMOOTH SCROLLING BY CLICKING MAIN MENU SECTIONS ========== */

    $(".navbar-barnaul").find("a[href^='#']").on('click', function(e) {
        /* Prevent standart hrefs functions */
        e.preventDefault();
        //e.defaultPrevented;
        /* Let's scroll it
        * 1000 — scrolling delay in ms (1 second), you can change it to your value */
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top-75}, 1000);

    });



    /* ========== FIX & UNFIX NAVBAR ON TOP & BODY TOP_MARGIN ========== */

    /* On page load */
    if ( $(document).width() < 768) {
        $('.navbar-barnaul').removeClass('navbar-fixed-top');
        $('body').css('margin-top','0');
    } else {
        $('.navbar-barnaul').addClass('navbar-fixed-top');
        $('body').css('margin-top','76px');
    };

    /* On window resize */
    $(window).resize(function() {
        if ( $(document).width() < 768) {
            $('.navbar-barnaul').removeClass('navbar-fixed-top');
            $('body').css('margin-top','0');
        } else {
            $('.navbar-barnaul').addClass('navbar-fixed-top');
            $('body').css('margin-top','76px');
        };
    });



    /* ========== BACKGROUND IMAGES SCROLLING PARALLAX ========== */

    $(window).stellar({
        horizontalScrolling: false
    });
});


