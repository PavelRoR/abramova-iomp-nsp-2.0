$(document).ready(function () {

    $('.mobile-menu').on('click', function () {
        if (!$('.header-nav').hasClass('nav-active')) {
            $(this).css('position', 'fixed');
            $('.header-nav').addClass('nav-active');
            $('.mobile-menu-line-1,.mobile-menu-line-2,.mobile-menu-line-3').addClass('switched')
        } else {
            $(this).css('position', 'absolute');
            $('.header-nav').removeClass('nav-active')
            $('.mobile-menu-line-1,.mobile-menu-line-2,.mobile-menu-line-3').removeClass('switched')
        }
    })
    /* Якорь */
    $("a.button-mobile, .button-up").click(function (f) {
        f.preventDefault();
        var a = $(this).attr("href"),
            b = $(a).offset().top;
        $("body,html").animate({
            scrollTop: b
        }, 500);

    });
    /*Конец документа*/
});