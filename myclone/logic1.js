jQuery(document).ready(function($) {

	/**  YOUR SCRIPT HERE  **/

	$(".programs-content").parent().parent().parent().parent().parent().parent().css({
		"background" : 'url(/images/uploads/bg-03.png) no-repeat',
		"background-color" : '#dad9dc',
		"background-size" : 'auto auto',
		"-webkit-background-size" : 'cover',
		"-moz-background-size" : 'cover',
		"-o-background-size" : 'cover',
		"background-size" : 'cover'
	});

	$(':input[type="submit"]').prop('disabled', true);
	$('input[type="checkbox"]').click(function() {
        if ($(this).is(':checked')) {
			$(':input[type="submit"]').prop("disabled", false);
        } else {
			if ($('.chk').filter(':checked').length < 1) {
				$(':input[type="submit"]').attr('disabled',true);
			}
		}
	});



});