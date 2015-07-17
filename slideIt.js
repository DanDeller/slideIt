$(function() {

	var slides    = $('#home-slider li'),
	    textIndex = 0,
	    slideText = [
  			{
				headLine : 'Headline text here',
				subHead  : 'Subhead text here'
			},
			{
				headLine : 'Headline text here',
				subHead  : 'Subhead text here'
			},
			{
				headLine : 'Headline text here',
				subHead  : 'Subhead text here'
			},
			{
				headLine : 'Headline text here',
				subHead  : 'Subhead text here'
			}
			];

	// fadeIn slider 
	$('#home-slider').fadeIn(1000);

	// create home slider
	function slideIt() {
		if ($('#home-slider li:first-child').next('li').length > 0) {
			setTimeout(function() {
				$('.headline p, .headline h2').fadeOut(500, function() {
					$('.headline p').text(slideText[textIndex].headLine);
					$('.headline h2').text(slideText[textIndex].subHead);
					$(this).fadeIn(500);
				});
				
				$('#home-slider li.active').removeClass('active').next('li').addClass('active');
				$('#home-slider li:first-child').appendTo($('#home-slider'));
				textIndex++;
				slideIt();

				if (textIndex == slides.length) {
					textIndex = 0;
				}
			}, 14000);
		} // end if
	} slideIt();
	
});
