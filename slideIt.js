$(function() {

	var slides    = $('#home-slider li'),
			textIndex = 0,
		  slideText = [
		  							{
											headLine : 'public records search service',
											subHead  : 'Background Checks, Police Records, Court Documents, Contact Information and Much More!'
										},
										{
											headLine : 'background checks',
											subHead  : 'Is there a felon, sex offender or former inmate on your block? Search criminal records 
																	using Instant Checkmate and find out.'
										},
										{
											headLine : 'the information you want',
											subHead  : 'Instant Checkmate takes the hassle out of uncovering someone’s past by making it easy to 
																	run a background check online and on the go.'
										},
										{
											headLine : 'expose the truth',
											subHead  : 'With Instant Checkmate you can discover truths, expose lies, and get the real story about 
																	the people in your life.'
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
