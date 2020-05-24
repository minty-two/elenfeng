$( document ).ready(function() {


	// SLICK
   $('.main-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.thumb-slider'
	});
	$('.thumb-slider').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  infinite: false,
	  asNavFor: '.main-slider',
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
	});
	// END SLICK
	applySlideImgs('.main-slider .slick-slide');
	applySlideImgs('.thumb-slider .slick-slide');
	// $('.main-slider .slick-slide, .thumb-slider .slick-slide').each(function(index, el) {
	// 	var $maxSlides = 
	// 	index++;
	// 	var $img = 'img/portfolio/can-you-see-me-now/menswear/can_you_see_me_now_menswear_page-'+index+'.jpg'
	// 	$(this).append('<img src="'+$img+'" style="visibility: hidden;" />')
	// 	$(this).css('background-image', 'url("'+$img+'")');
	// });

	$('.hamburger').click(function(event) {
		$('.hamburger, .side-nav').toggleClass('is-active');
	});

	function applySlideImgs(sel){
		$(sel).each(function(index, el) {
			index++;
			var $img = '../img/portfolio/can-you-see-me-now/menswear/can_you_see_me_now_menswear_page-'+index+'.jpg'
			$(this).append('<img src="'+$img+'" style="visibility: hidden;" />')
			$(this).css('background-image', 'url("'+$img+'")');
		});
	}

});