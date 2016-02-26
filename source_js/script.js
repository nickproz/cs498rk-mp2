// Write any custom javascript functions here
$(document).ready(function() {
	
	$('#homePhoto img').hover(function() {
		$('#homeText').slideToggle(500);
	});
	
	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	});

	$(window).scroll(function () {
		if(document.body.scrollTop === 0) {
			/* $(".navigation").animate({zoom: '100%'}, '500');
			shrink = false; */
			$(".navigation").removeClass("small").addClass("large");
		} 
		else {
			 $(".navigation").removeClass("large").addClass("small");
			/* if(shrink === false)
			{
				$(".navigation").animate({zoom: '90%'}, '500');
				shrink = true;
			} */
		}
	});
	
});