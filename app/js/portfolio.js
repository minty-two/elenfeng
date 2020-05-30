var menswearSlides = 44;
var womenswearSlides = 17;
var mydreamSlides = 6;
$( document ).ready(function() {

	var slideContainer = '.main-slider .slide-container';
	var pageIdentifier = $('.slider-page').attr('page-id');
	var pageArr;
	var $loadingTime = 3000;


	if ( pageIdentifier == 'menswear' ) {
		pageArr = menswearSlides;
	} else if ( pageIdentifier == 'womenswear' ) {
		pageArr = womenswearSlides;
	} else if ( pageIdentifier == 'mydream' ) {
		pageArr = mydreamSlides;
	}

	$.fakeLoader({
        timeToHide: $loadingTime,
        bgColor:'#ffffff',
        spinner:'spinner7'
    });

	newFunction(slideContainer,pageArr, pageIdentifier)

	// SLICK
	setTimeout(function(){ 
		$(slideContainer).slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	dots: true,
	  	arrows: true,
	  	prevArrow: $('.prev'),
	  	nextArrow: $('.next'),
	  	fade: true,
	  	adaptiveHeight: true,
		});
	},  $loadingTime);
	// END SLICK

	function newFunction(sel,arrInt, folder){
		var totalSlides = arrInt;
		if ( pageIdentifier == 'mydream' ) {
			for (var i = 1; i < totalSlides; i++) {
				$(sel).append('<div data-slide-id="'+i+'"><img src="../img/gallery/'+folder+'/'+i+'.jpg"/></div>')
			}
		} else {
			for (var i = 1; i < totalSlides; i++) {
				$(sel).append('<div data-slide-id="'+i+'"><img src="../img/portfolio/can-you-see-me-now/'+folder+'/'+i+'.jpg"/></div>')
			}
		}
	}

});