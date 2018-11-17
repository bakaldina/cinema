$(document).ready(function () {
    console.log($('.slider-init').length);
    if ($('.slider-init').length > 0) {
        $('.slider-init').slick({
            dots: true,
            autoplay: true,
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


    $(document).mouseup(function (e) {

        if ($('.modal').hasClass('open')) {
            var div = $(".modal-wrap");

            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.modal').removeClass('open');
            }
        }
    });

    //    head-user .modal-seats_content 
    $('.modal-enter').hide();

    $('.open-modal').click(function () {
        $('.modal').addClass('open')
    });
    $('.modal-close').click(function () {
        $('.modal').removeClass('open')
    });
    $('.modal-back').click(function () {
        $('.modal-enter').show()
    });


    feather.replace();

});