$(document).ready(function () {
    var $window = $(window),
        scroll = 0,
        $nav = $("header nav")
    $window.scroll(function (e) {
        var savedScroll = $(document).scrollTop();
        if (savedScroll < 1) {
            $nav.addClass('not-scrolled');
            $nav.removeClass('scrolled');

        } else if (savedScroll < scroll) {
            $nav.addClass('scrolled');
            $nav.removeClass('not-scrolled');
        } else if (savedScroll > scroll) {
            $nav.removeClass('scrolled');
        }
        scroll = savedScroll;
    })

    $('nav ul li a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr("href");
        var target = $(id.toString());
        $(window).scrollTo(target, 800);
    })
});