
$( document ).ready(function() {

	$('.hamburger').click(function(event) {
		$('.hamburger, .side-nav, main, header').toggleClass('is-active');
	});

	// keyboard actions

	$(document).keyup(function(e) {
	  if ( e.keyCode === 27 &&  $('.side-nav').hasClass('is-active') ) {
	  		$('.hamburger, .side-nav, main').toggleClass('is-active');
	  }
	});

<<<<<<< HEAD:js/main.js
	function applySlideImgs(sel){
		$(sel).each(function(index, el) {
			index++;
			var $img = '../img/portfolio/can-you-see-me-now/menswear/can_you_see_me_now_menswear_page-'+index+'.jpg'
			$(this).append('<img src="'+$img+'" style="visibility: hidden;" />')
			$(this).css('background-image', 'url("'+$img+'")');
		});
=======
	// END keyboard actions

	// Generic functions

	function toggleIsActive(el, that){
		$(el).removeClass('is-active')
		if ( !$(that).hasClass('is-active')  ) {
			$(that).addClass('is-active')
		} else{
		}
>>>>>>> master:app/js/main.js
	}

});