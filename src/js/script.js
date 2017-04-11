$(document).ready(function () {
    var $window = $(window);
    //     scroll = 0,
    //     $nav = $("header nav");
    // $window.scroll(function (e) {
    //     var savedScroll = $(document).scrollTop();
    //     if (savedScroll < 1) {
    //         $nav.addClass('not-scrolled');
    //         $nav.removeClass('scrolled');
    //
    //     } else if (savedScroll < scroll) {
    //         $nav.addClass('scrolled');
    //         $nav.removeClass('not-scrolled');
    //     } else if (savedScroll > scroll) {
    //         $nav.removeClass('scrolled');
    //     }
    //     scroll = savedScroll;
    // });

    var headerHeight = $('header').height(),
        $nav = $("header nav"),
        $header = $('header'),
        offset = 0;
    $window.scroll(function (e) {
        offset = $window.scrollTop();
        if (window.innerWidth < 768) {
            $header.css('background', 'white');
            $('#areas .hero-bg').height($('#areas').height());
            if (offset > headerHeight) {
                $header.addClass('scrolled');
            }
            else {
                $header.removeClass('scrolled');
            }
        }
        else {
            if (offset > headerHeight) {
                $nav.addClass('scrolled');
            }
            else {
                $nav.removeClass('scrolled');
            }
        }
    });

    $('nav ul li a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr("href");
        var target = $(id.toString());
        if (window.innerWidth < 768) {
            $(window).scrollTo(target, 800, {offset: -112});
            $nav.hide();
        }
        else {
            $(window).scrollTo(target, 800, {offset: -62});
        }
    });

    $('.mobile.nav').click(function (e) {
        $nav.slideToggle();
    })
});