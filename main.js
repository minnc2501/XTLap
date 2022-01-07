document.addEventListener('DOMContentLoaded', function() { 
    $('.filtering').slick({
    slidesToShow: 5,
    slidesToScroll: 5
    });

    var filtered = false;

    $('.js-filter').on('click', function(){
    if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});

$(".click-to-top").on('click', function(event) {

    $("html, body").animate({ scrollTop: 0 }, 'slow');
  return false;

});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 250) {
        $('.menu-top__digest').addClass('fixed');
    } else {
        $('.menu-top__digest').removeClass('fixed');
    }
});

$('.iconlt-dealsoc__active').on('click',function(event) {
    $('html,body').animate({scrollTop : $('#dealsoc').offset().top -50}, 'slow');
})

$('.iconlt-gaming__active').on('click',function(event) {
    $('html,body').animate({scrollTop : $('#gaming').offset().top -62}, 'slow');
})
$('.iconlt-macbook__active').on('click',function(event) {
    $('html,body').animate({scrollTop : $('#macbook').offset().top -62}, 'slow');
})
$('.iconlt-hoc-tap-van-phong__active').on('click',function(event) {
    $('html,body').animate({scrollTop : $('#hoc-tap-van-phong').offset().top -62}, 'slow');
})
$('.iconlt-do-hoa-ky-thuat__active').on('click',function(event) {
    $('html,body').animate({scrollTop : $('#do-hoa-ky-thuat').offset().top -62}, 'slow');
})
$('.iconlt-mong-nhe__active').on('click',function(event) {
    $('html,body').animate({scrollTop : $('#mong-nhe').offset().top -62}, 'slow');
})

$('.header__navbar-item-dangky').on('click', function(event) {
    $('.modal').addClass('show');
    $('.auth-form__sign-up').addClass('show');
});

$('.auth-form__controls-back').on('click', function(event) {
    $('.modal').removeClass('show');
    $('.auth-form__sign-up').removeClass('show');
    $('.auth-form__login').removeClass('show');
});

$('.modal_overlay').on('click', function(event) {
    $('.modal').removeClass('show');
    $('.auth-form__sign-up').removeClass('show');
});

$('.modal_overlay').on('click', function(event) {
    $('.modal').removeClass('show');
    $('.auth-form__sign-up').removeClass('show');
});

$('.auth-form__heading-switch-btn-dangnhap').on('click', function(event) {
    $('.auth-form__sign-up').removeClass('show');
    $('.auth-form__login').addClass('show');
});

$('.auth-form__heading-switch-btn-dangky').on('click', function(event) {
    $('.auth-form__login').removeClass('show');
    $('.auth-form__sign-up').addClass('show');
});

$('.header__navbar-item-dangnhap').on('click', function(event) {
    $('.modal').addClass('show');
    $('.auth-form__login').addClass('show');
});

$('.social-right-fixed__window-header__icon-option-has-notify').on('click', function(event) {

    $('.social-right-fixed__window-header__icon-option__list').toggleClass('show');
});

$('.social-right-fixed__messeger img').on('click', function(event) {

    $('.social-right-fixed__window').toggleClass('show');
});

$('.social-right-fixed__window-header__icon-close').on('click', function(event) {

    $('.social-right-fixed__window').removeClass('show');
});



},false)