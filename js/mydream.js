$( document ).ready(function() {

	var pageIdentifier = $('main').attr('id');
	var pageArr = 6;
	var $loadingTime = 3000;

	$.fakeLoader({
        timeToHide: $loadingTime,
        bgColor:'#ffffff',
        spinner:'spinner7'
    });

	newFunction('.main-slider',pageArr, pageIdentifier)

	setTimeout(function(){ 
		$('.main-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  adaptiveHeight: true,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
	});
	},  $loadingTime);

	function newFunction(sel,arrInt, folder){
		console.log(arrInt)
		var totalSlides = arrInt;
		for (var i = 1; i < totalSlides; i++) {
			$(sel).append('<div data-slide-id="'+i+'"><img src="../img/gallery/'+folder+'/'+i+'.jpg"/></div>')
		}
	}

});