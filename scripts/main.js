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


    $(document).mouseup(function (e) { // событие клика по веб-документу
        if ($('.modal').hasClass('open')) {
            var div = $(".modal-wrap"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.modal').removeClass('open'); // скрываем его
            }
        }
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if ($('.modal-mini').hasClass('open')) {
            var div = $(".modal-mini_wrap"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.modal-mini').removeClass('open'); // скрываем его
            }
        }
    });

//    head-user .modal-seats_content 
    $('.modal-enter').hide();

    $('.modal-buy').click(function(){
        $('.modal-enter').show();
        $('.modal-status_elem.pay').addClass('active');
    });

    $('.head-user').click(function () {
        $('.modal-mini').addClass('open')
    });
   

    $('.open-modal').click(function () {
        $('.modal').addClass('open')
    });
    $('.modal-back').click(function () {
        $('.modal-enter').show()
    });

    feather.replace();

});