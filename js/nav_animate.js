// JavaScript Document
//jQuery code
$(document).ready (function(){
	//add to hide header
	$('header').hide().slideDown(2000);
	//icon animation
	$('.icon').click(function(){
		$(this)
		.toggleClass('browser')
		.toggleClass('check');
	});
});//end ready
