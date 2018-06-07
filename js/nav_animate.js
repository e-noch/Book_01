//jQuery
/*
**
** v1.0.0
** Author: Enoch Daniel Adams
** Last Updated: 2018.05.15
** Github: https://e-noch.github.io/compiled/
**
*/
$(document).ready (function(){
	//add to hide header
	$('header').hide().fadeIn(2000);
	
	//icon animation
	$('.icon').click(function(){
		$(this)
		.toggleClass('home')
		.toggleClass('home');
		
	});//end icon animation
	
	//icon Browers animation
	$('.icon1').click(function(){
		$(this)
		.toggleClass('browser')
		.toggleClass('check');
		
	});//end icon animation
	
	//link-boxContents picture animation
	$('.icon2').click(function(){
		$(this)
		.toggleClass('picture')
		.toggleClass('check');
		
	});//end link-boxContents animation
	
	//link-Map animation
	$('.icon5').click(function(){
		$(this)
		.toggleClass('map')
		.toggleClass('check');
	});//end link-Map animation
	
	//link-contrast animation
	$('.icon4').click(function(){
		$(this)
		.toggleClass('contrast')
		.toggleClass('check');
	});//end link-contrast animation
	
	//link-mobile animation
	$('.icon6').click(function(){
		$(this)
		.toggleClass('mobile')
		.toggleClass('check');
	});//end link-contrast animation
	
	//link-pie-chart animation
	$('.icon7').click(function(){
		$(this)
		.toggleClass('pie-chart')
		.toggleClass('check');
	});//end link-contrast animation
	
	//footer slide
		$(".vMore").click(function () {
			$(".slide").slideToggle("slow");
		});//end footer
	
	//Footer heart animation
	$('.icon3').click(function(){
		$(this)
		.toggleClass('heart')
		.toggleClass('share-filled');
	});//end footer heart animation
});//end ready
