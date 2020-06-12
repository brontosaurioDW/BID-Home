$(document).ready(function(){
	$('.js-home-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: false,
		nextArrow:"<img class='a-right control-c next slick-next' src='img/icons/right.png'>",
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/icons/left.png'>"
	});
	$('.js-hm-events-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		adaptiveHeight: false ,
		nextArrow:"<img class='a-right control-c next slick-next' src='img/icons/right.png'>",
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/icons/left.png'>",
		responsive: [
	        {
	            breakpoint: 992,
	            settings: {
	                slidesToShow: 2
	            }
	        },
	        {
	            breakpoint: 768,
	            settings: {
	                slidesToShow: 1
	            }
	        },
	        {
	            breakpoint: 576,
	            settings: {
	                slidesToShow: 1
	            }
	        }
	    ]
	});
	$('.js-hm-docs-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: false ,
		nextArrow:"<img class='a-right control-c next slick-next' src='img/icons/right-alt.png'>",
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/icons/left-alt.png'>"
	});
	$('.js-hm-implives-slider').slick({
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







