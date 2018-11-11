$(document).ready(function () {
    $('.headmenu-slider').slick({
        dots: true,
    });

    let currentSlide = $('.headmenu-slider').slick('slickCurrentSlide') + 1;
    let slideCount = $(".headmenu-slider").slick("getSlick").slideCount;
    $('.currentSlide').html(currentSlide);
    $('.slideCount').html(slideCount);

    $(".headmenu-slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".currentSlide").text(currentSlide + 1);
    });

    $('.calendar-modal').click(function () {
        $('.modal').addClass('open')
    });
    $('.modal-back').click(function () {
        $('.modal').removeClass('open')
    });

});