
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

	// END keyboard actions

	// Generic functions

	function toggleIsActive(el, that){
		$(el).removeClass('is-active')
		if ( !$(that).hasClass('is-active')  ) {
			$(that).addClass('is-active')
		} else{
		}
	}

});