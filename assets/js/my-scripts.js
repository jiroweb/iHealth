$(document).ready(function () {
    // mob menu function
    $('body').on('click', '.clickOpenMenu', function () {
        $('.headerMobMenu').addClass('active');
        $('body').addClass('overflow-hidden');
    });

    $("body").on('mouseover', '.clickCloseMenu', function () {
        $('.headerMobMenu').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });


    // slick slider

    $('.slideItems').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });
});
