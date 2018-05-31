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
/*	$('.icon').click(function(){
		$(this)
		.toggleClass('browser')
		.toggleClass('check');
		
	});//end icon animation*/
	
	
	$('.icon').click(function(){
		if ($(this).prop('.icon')){
			$('icon').toggleClass('browser');
		} else {
			$('icon').toggleClass('check');
		}// if
	});//end icon animation
	
	//copypasat
	$('#hideShip').click(function(){
		//alert("greetings");
		if ($(this).prop('checked'))
		//if box is clicked go and check the propourty checked and fire function
		{
			$('#shipping').slideUp('60');
		} else {
			$('#shipping').slideDown('slow');
		}// if
	});//hide shiping click
	
	
	
	
	
	
	
	//link-boxContents animation
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
});//end ready
