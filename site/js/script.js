$(document).ready(function(){
	$('.mv-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		nextArrow:"<img class='a-right control-c next slick-next' src='img/icons/right.png'>",
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/icons/left.png'>"
	});
  });

  

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$(document).on('click', '.js-pr-btn-banner', function (event) {
	$('html, body').animate({
		scrollTop: $("#pr-contact").offset().top
    }, 500);
});


$('.js-menu-item > a').click(function() {
    $('.js-menu-item').removeClass('active');
    $(this).parent().addClass('active');
});
