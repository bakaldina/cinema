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


    feather.replace();

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [59.931634, 30.353876],
            zoom: 16
        }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemarkWithContent = new ymaps.Placemark([59.931634, 30.353876], {
                hintContent: 'Невский проспект, 67',

            }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: 'assets/img/map-pin.png',
                    // Размеры метки.
                    iconImageSize: [50, 50],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-32, -60],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [15, 15],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                });

        myMap.geoObjects
            .add(myPlacemarkWithContent);
    });
});