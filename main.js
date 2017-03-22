function scrollDown() {		//function header
	$('body').animate({ scrollTop: $('.blue').offset().top }, 1000);	
}

function scrollUp() {
	$('body').animate({ scrollTop: $('.pink').offset().top }, 1000);
}

function showImage() {
	document.getElementById('puppy').style.display = 'block';	
} //super useful and simple line, display, color, etc.
//look up html events for different actions
function hideImage() {
	document.getElementById('puppy').style.display = 'none';
}

function fadeIn() {
	$('#puppy').hide();
	$('#puppy').fadeIn(1000);
}

function fadeOut() {
	$('#puppy').show();
	$('#puppy').fadeOut(1000);
}

$(window).scroll(function() {
	console.log($(window).scrollTop());

	var breakpoint = 1550;
	if ($(window).scrollTop() >= breakpoint){
		$('.teal').css('visibility', 'visible').hide().fadeIn(1500);
		$(this).off('scroll');
	}

});