$(document).ready(function() {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $('html').on('click', function(e) {
        if (!$(e.target).closest('.nav').length &&
            !$(e.target).closest('.header__burger').length) {
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')

            $('.navbar').removeClass('opened')
            $('.header__burger').removeClass('opened')
        }
    })

    function openMobMenu() {
        $('.header__burger').on('click', function() {
            $('body').toggleClass('overflow-hidden')
            $('#page').toggleClass('bg-overlay')
            $(this).toggleClass('opened')
            $('.navbar').toggleClass('opened')
        })
    }

    openMobMenu();

    let aboutSlider = new Swiper('.about-slider .swiper', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,

        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            744: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1400: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        },

        navigation: {
            nextEl: '.navigations .button-right',
            prevEl: '.navigations .button-left',
        }
    })

    // REQUEST FORM
    Fancybox.bind(".request-btn");

    // CALLBACK FORM
    Fancybox.bind("#callback-btn");

})