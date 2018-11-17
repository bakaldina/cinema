$(document).ready(function () {
    console.log($('.slider-init').length);
    if ($('.slider-init').length > 0) {
        $('.slider-init').slick({
            dots: true,
        });
        let currentSlide = $('.slider-init').slick('slickCurrentSlide') + 1;
        let slideCount = $(".slider-init").slick("getSlick").slideCount;
        $('.currentSlide').html(currentSlide);
        $('.slideCount').html(slideCount);

        $(".slider-init").on("afterChange", function (event, slick, currentSlide, nextSlide) {
            $(".currentSlide").text(currentSlide + 1);
        });
    }


    $(document).mouseup(function (e) { // событие клика по веб-документу

        if ($('.modal').hasClass('open')) {
            var div = $(".modal-wrap"); // тут указываем ID элемента

            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.modal').removeClass('open'); // скрываем его
            }
        }
    });

//    head-user .modal-seats_content 
    $('.modal-enter').hide();

    $('.open-modal').click(function () {
        $('.modal').addClass('open')
    });
    $('.modal-back').click(function () {
        $('.modal-enter').show()
    });

    feather.replace();

});