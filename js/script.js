$(document).ready(function() {
	$('#categories > ul ul').each(function() {
		$(this).hide();
	});

	$('#categories > ul li span').on('click', function() {
		$(this).next('ul').slideToggle('fast');
		$(this).toggleClass('minus');
	});
});