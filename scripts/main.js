$(document).ready(function () {
    // слайдер
    if ($('.slider-init').length > 0) {
        $('.slider-init').slick({
            dots: true,
            autoplay:  true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        });
        let currentSlide = $('.slider-init').slick('slickCurrentSlide') + 1;
        let slideCount = $(".slider-init").slick("getSlick").slideCount;
        $('.currentSlide').html(currentSlide);
        $('.slideCount').html(slideCount);

        $(".slider-init").on("afterChange", function (event, slick, currentSlide, nextSlide) {
            $(".currentSlide").text(currentSlide + 1);
        });
    }

    // Модалки   

    $(document).mouseup(function (e) {
        if ($('.modal').hasClass('open')) {
            var div = $(".modal-wrap");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.modal').removeClass('open');
            }
        }
    });

    $(document).mouseup(function (e) {
        if ($('.modal-mini').hasClass('open')) {
            var div = $(".modal-mini_wrap");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.modal-mini').removeClass('open');
            }
        }
    });

    // Модалки   
    $('.modal-enter').hide();

    $('.modal-buy').click(function () {
        $('.modal-enter').show();
        $('.modal-status_elem.pay').addClass('active');
    });

    $('.head-user').click(function () {
        $('.modal-mini').addClass('open')
    });


    $('.open-modal').click(function () {
        $('.modal').addClass('open')
    });
    $('.modal-close').click(function () {
        $('.modal').removeClass('open')
    });

    $('.modal-mini_close').click(function () {
        $('.modal-mini').removeClass('open')
    });
    $('.modal-back').click(function () {
        $('.modal-enter').show()
    });

    // мобильное меню
    var $btn = $('.btn-menu');
    $btn.click(function () {
        $('body').toggleClass('show');
    })

    // для иконок
    feather.replace();
});