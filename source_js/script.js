// Write any custom javascript functions here
$(document).ready(function() {
	
	/* NAVIGATION RESIZE */
	$(window).scroll(function () {
		if(document.body.scrollTop === 0)
			$(".navigation").removeClass("small").addClass("large");
		else
			 $(".navigation").removeClass("large").addClass("small");
	});
	
	/* ABOUT ME CAROUSEL */
	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	});

	/* VIDEO */
	var video = false;
	$('#homeText').click(function() {
		
		if($(window).width() > 1024 && video){
			$('#video').hide();
			$("#home").css('background-image', 'url("../data/home1.jpg")');
			$("#home").css('background-color', 'rgba(0, 204, 255, 0.4)');
			video = false;
		}
		
		else if($(window).width() > 1024 && !video) {
			$("#home").css('background-image', 'none');
			$("#home").css('background-color', 'rgba(255, 255, 255, 0)');
			$('#video').show();
			video = true;
		}
		
	});
	
});