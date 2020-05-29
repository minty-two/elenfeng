var menswearSlides = 44;
var womenswearSlides = 17;
$( document ).ready(function() {

	var pageIdentifier = $('#portfolio').attr('page-id');
	var pageArr;
	var $loadingTime = 3000;


	if ( pageIdentifier == 'menswear' ) {
		pageArr = menswearSlides;
	} else if ( pageIdentifier == 'womenswear' ) {
		pageArr = womenswearSlides;
	}

	$.fakeLoader({
        timeToHide: $loadingTime,
        bgColor:'#ffffff',
        spinner:'spinner7'
    });

	newFunction('.main-slider',pageArr, pageIdentifier)
	newFunction('.thumb-slider',pageArr, pageIdentifier)

	setTimeout(function(){ 
		$('.main-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.thumb-slider',
	  adaptiveHeight: true,
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
	  adaptiveHeight: true,
	  responsive: [{
	    breakpoint: 1198,
	    settings: {
	        slidesToShow: 3,
	        // centerMode: false,
	      }
	    },]
	});
	},  $loadingTime);
	// SLICK
 //   $('.main-slider').slick({
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	//   fade: true,
	//   asNavFor: '.thumb-slider',
	//   adaptiveHeight: true,
	// });
	// $('.thumb-slider').slick({
	//   slidesToShow: 5,
	//   slidesToScroll: 1,
	//   infinite: false,
	//   asNavFor: '.main-slider',
	//   dots: false,
	//   centerMode: false,
	//   focusOnSelect: true,
	//   prevArrow: $('.prev'),
	//   nextArrow: $('.next'),
	//   responsive: [{
	//     breakpoint: 1198,
	//     settings: {
	//         slidesToShow: 3,
	//         // centerMode: false,
	//       }
	//     },]
	// });
	// END SLICK
	
	// applySlideImgs('.main-slider .slick-slide');
	// applySlideImgs('.thumb-slider .slick-slide');
	
	function applySlideImgs(sel){
		$(sel).each(function(index, el) {
			index++;
			var $img = '../img/portfolio/can-you-see-me-now/menswear/can_you_see_me_now_menswear_page-'+index+'.jpg'
			$(this).append('<img src="'+$img+'" style="visibility: hidden;" />')
			$(this).css('background-image', 'url("'+$img+'")');
		});
	}

	function newFunction(sel,arrInt, folder){
		console.log(arrInt)
		var totalSlides = arrInt;
		for (var i = 1; i < totalSlides; i++) {
			$(sel).append('<div data-slide-id="'+i+'"><img src="../img/portfolio/can-you-see-me-now/'+folder+'/'+i+'.jpg"/></div>')
		}
	}

});