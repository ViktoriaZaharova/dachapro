$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>'
});

$('.product-gallery').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: true,
            }
        }
    ]
});

$('.product-preview').slick({
    slidesToShow: 5,
    arrows: false,
    asNavFor: '.product-gallery',
    variableWidth: true,
    focusOnSelect: true
});

$('.viewed-wrapper-slider').slick({
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.btn-load').on('click', function (e) {
   e.preventDefault();
   $(this).parents('.catalog').find('.product-col:hidden').slice(0,4).show();

    var onBlock = $('.product-col:hidden').length;
    if(onBlock <= 0) {
        $('.btn-load').hide();
    }
});

$('.btn-burger').on('click', function () {
    $('.mobile-menu').slideToggle();
});

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});
