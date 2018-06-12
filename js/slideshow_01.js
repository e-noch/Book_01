// JavaScript Document
/*
//
// Malacandra Slid Show JS
// Enoch Daniel Adams
// @dustanashes
// June 04, 2018
//
*/
$(document).ready(function(){
	window.onload =inintlinks;
	// js alwyas start with var
	//gobal array
	var myImages = new Array (	
							 "./images/IMG_2155.JPG",
							 "./images/IMG_2161.JPG",
							 "./images/IMG_2162.JPG",
							 "./images/IMG_2177.JPG",
							 "./images/IMG_2179.JPG",
							 "./images/IMG_2185.JPG");
	var thisPic=0;//start here
	function inintlinks(){
		'use strict';
		//alert("Nioce");
		document.getElementById("processPrevious").onmousedown=processPrevious; //look for function
		document.getElementById("processNext").onmousedown=processNext;
	}//initLinks
	function processPrevious(){
		'use strict';
		if (thisPic === 0){ // the image
			thisPic=myImages.length; // the array length
		}//if
		thisPic--; // deduct from the length 
		document.getElementById("myPicture").src=myImages[thisPic]; // display pricture
		return false;
	}//processPrevious
	function processNext(){
			'use strict';
		thisPic++; // incress one to length or add one to current image
		if (thisPic === myImages.length){ // reset value
			thisPic=0;
		}//if
		document.getElementById("myPicture").src=myImages[thisPic];// replaces image with new image
		return false;
	}//processNext
});//Document Ready