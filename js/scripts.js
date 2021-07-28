$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            emCorr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,10}$/,
            message = $('.alert-message', this),
            button = $('.button-form', this);
        email.keyup(function () {
            if (emCorr.test($(this).val())) {
                $(this).parent().parent('.form').children('.button').css('backgroundColor', '#48817B');
            }
            if (!$(this).val() || !emCorr.test($(this).val())) {
                $(this).parent().parent('.form').children('.button').css('backgroundColor', '#C7C7C7')
                // button.css('backgroundColor', '#C7C7C7')
            }
        })
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this);

            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#9C9C9C",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#9C9C9C",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });

    $('.button-up').fancybox();
    $('[data-fancybox]').fancybox({
        loop: 0,
    });
    $('.revs-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 300,
        arrows: true,
        // centerPadding: '40px',
        // adaptiveHeight: true,
        // centerMode: true,
        appendArrows: '.video-revs-arrows-1',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            },
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 300,
        arrows: true,
        // centerPadding: '40px',
        // adaptiveHeight: true,
        // centerMode: true,
        appendArrows: '.video-revs-arrows-2',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            },
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    /* Видео */
    $(".video-wrapper-revs").click(function () {
        $(".video-wrapper-revs iframe").each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        })
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>')
    });

    function imToVideo() {
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        });
        $(".video-wrapper-revs img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?modestbrandig=1&mute=1&showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>');
        });
    }
    $('.revs-slider').on('swipe', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('afterChange', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('beforeChange', function (event, slick, direction) {
        imToVideo();
    });

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
    $("a.button-mobile").click(function (f) {
        f.preventDefault();
        var a = $(this).attr("href"),
            b = $(a).offset().top;
        $("body,html").animate({
            scrollTop: b
        }, 500);

    });
    /*Конец документа*/
});