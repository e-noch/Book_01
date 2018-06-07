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
	$('.iconWrapper').click(function(){
		$(this)
		.toggleClass('map')
		.toggleClass('check');
	});//end link-Map animation
	
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
