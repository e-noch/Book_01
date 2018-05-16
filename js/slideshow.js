// JavaScript Document
/*
**
** v1.1.0
** Last Updated: 2018.05.15
** Author: Enoch Daniel Adams
** Github: https://e-noch.github.io/compiled/
**
*/
window.onload =inintlinks;
// js alwyas start with var
//gobal array
var myImages = new Array ("./images/vac1.jpg",
						 "./images/vac2.jpg",
						 "./images/vac3.jpg",
						 "./images/vac4.jpg",
						 "./images/vac5.jpg",
						 "./images/piz1.jpg",
						 "./images/piz2.jpg",
						 "./images/piz3.jpg");
var thisPic=0;//start here
function inintlinks(){
	'use strict';
	//alert("Nioce");
	document.getElementById("prevLink").onclick=processPrevious; //look for function
	document.getElementById("nextLink").onclick=processNext;
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