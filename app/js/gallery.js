var pagePos;
var activeScrollID = 1;
var slidePosArr =[];
$( document ).ready(function() {
	createScrollPixel();
	dimensionArray();

	$(window).resize(function(event) {
		dimensionArray();
	});

	// Create scroll pixel
	$(window).scroll(function(event) {
		/* Act on the event */
		pagePos = $('#scrollPixel').offset().top;
		
		$.each(slidePosArr, function(index, val) {
			 if ( isBetween(pagePos,slidePosArr[index][0],slidePosArr[index][1]) ) {
			 	var thisIndex = index+1;
			 	if ( thisIndex ==  activeScrollID) {
			 	} else{
			 		activeScrollID = thisIndex;
			 		animatePos();
			 	}
			 }
		});

		function isBetween(n, a, b) {
		   return (n - a) * (n - b) <= 0
		}
	});
	// Gallery scroll

	scrollListItems('.scroll-item');

	// $('#theHallway').on('click', '#scrollControl li', function(event) {
	// 	event.preventDefault();
	// 	/* Act on the event */
	// 	animatePos();

	// 	activeScrollID = $(this).attr('data-scroll-id');
	// 	gsap.to(window, {duration: 2, scrollTo:'.scroll-item[data-scroll-id="'+activeScrollID+'"]'});

	// 	// toggleIsActive('#scrollControl li' ,'#scrollControl li[data-scroll-id="'+activeScrollID+'"]')

	// });

	function dimensionArray(){
		slidePosArr = [];
		$('.scroll-item').each(function(index, el) {
			index++;
			var a = $(this).outerHeight()
			var b = $(this).position().top;
			var c = a * index;
			var d = [b, c]
			slidePosArr.push(d);
		});
	}

	function scrollListItems(sel){
		$(sel).each(function(index, el) {
			index++;
			$(this).attr('data-scroll-id',index);

			var $item = '<li class="side-nav-item" data-scroll-id="'+index+'"></li>'
			$('#scrollControl').append($item)
		});
	}

	function animatePos(){
		var $animateItem = $('.animate');
		var $curPos = ($animateItem.position().top)+8;
		var $newPos = ($('#scrollControl li[data-scroll-id="'+activeScrollID+'"]').position().top);

		var tl = gsap.timeline({});
		tl.to($animateItem, {ease: 'none',duration: 0.3, scale: 1, y: ($curPos)});
		tl.to($animateItem, {duration: 0.3, y: $newPos});
		tl.to($animateItem, { ease: 'back. out( 1.7)',duration: 0.3, scale: 2});
	}

	function createScrollPixel(){
		$('body').append('<span id="scrollPixel" style="width: 1px; height: 1px; position: fixed; top: 50%; left: 0; background-color: transparent;"></span>')
	}
	// END Gallery scroll

});