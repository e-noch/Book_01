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
var myImages = new Array ("/images/IMG_2155.jpg",
						 "./images/IMG_2162.JPG",
						 "./images/IMG_2161.JPG",
						 "./images/IMG_2185.JPG",
						 "./images/IMG_2179.JPG",
						 "./images/IMG_2177.JPG");
var thisPic=0;//start here
function inintlinks(){
	//alert("Nioce");
	document.getElementById("prevLink").onclick=processPrevious; //look for function
	document.getElementById("nextLink").onclick=processNext;
}//initLinks
function processPrevious(){
	if (thisPic === 0){ // the image
		thisPic=myImages.length; // the array length
	}//if
	thisPic--; // deduct from the length 
	document.getElementById("myPicture").src=myImages[thisPic]; // display pricture
	return false;
}//processPrevious
function processNext(){
	thisPic++; // incress one to length or add one to current image
	if (thisPic === myImages.length){ // reset value
		thisPic=0;
	}//if
	document.getElementById("myPicture").src=myImages[thisPic];// replaces image with new image
	return false;
}//processNext