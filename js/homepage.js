var fakeLoaderTiming = 1200;
var fakeLoaderTimingMS = (fakeLoaderTiming / 1000);

$( document ).ready(function() {

	 $.fakeLoader({
        timeToHide:fakeLoaderTiming,
        bgColor:'#ffffff',
        spinner:'spinner7'
    });

	introTL();

	function introTL() {
		var tl = gsap.timeline({onStart: underlineAnim, onComplete: underlineAnim, delay: fakeLoaderTimingMS});
		tl.from($('#home .main-content, .bg-img'), {ease: 'none',duration: 1.5, opacity: 0}, 'together');
		tl.from($('#home .main-content'), {ease: 'power2. in',duration: 1.5, y: -200}, 'together');
		tl.from($('.bg-img > div'), {ease: 'power2. in',duration: 1.5, y: 200}, 'together');
	}

	function underlineAnim(){
		$('.underline').toggleClass('animate');
	}

});