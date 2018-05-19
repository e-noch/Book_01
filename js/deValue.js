// JavaScript Document
var Money=function(id){
	'use strict';
	return document.getElementById(id);
};//Money
var calculate_click=function(){
	'use strict';
	//alert("Pizza...");
	var investment=parseFloat(Money("investment").value);
	var annualRate=parseFloat(Money("rate").value);
	var years=parseInt(Money("years").value);
	//alert(anuelRate);
	//alert(years);
	//alert(investment);
	var monthlyRate=annualRate/12/100;
	var months= years * 12;
	var futurevalue=0;
	//loop repeat
	for (var i=1; i<=months; i++){
		futurevalue=(futurevalue + investment)* (1+monthlyRate);
	}//for
	Money("futurevalue").value= "$ " + futurevalue.toFixed(2);
};//calculate_click
window.onload=function(){
	'use strict';
	Money("calculate").onclick=calculate_click;
	Money("investment").focus();
};//onload