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

    if ($('.modal').hasClass('open')) {
        console.log(11);
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".modal"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(); // скрываем его
            }
        });
    }


    $('.open-modal').click(function () {
        $('.modal').addClass('open')
    });
    $('.modal-back').click(function () {
        $('.modal').removeClass('open')
    });

    feather.replace();

});