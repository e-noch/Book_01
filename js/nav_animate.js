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
	});//end icon animation
	
	//link-boxContents animation
	$('.icon2').click(function(){
		$(this)
		.toggleClass('picture')
		.toggleClass('check');
	});//end link-boxContents animation
	
	//link-Map animation
	$('.aMap').click(function(){
		$(this)
		.toggleClass('picture')
		.toggleClass('check');
	});//end link-Map animation
});//end ready
