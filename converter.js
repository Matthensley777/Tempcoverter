// var convertedValeToHTML = ;

function toCelsius () {
	// var fToC = newTempC(document.getElementById("celsius").value);
	
	// document.getElementById("celsius").value = cToF;
	var userInput = parseInt (document.getElementById("userinput").value);
	var convertedValue = parseInt((userInput - 32) * (5/9));
	document.getElementById("convertedvalue").value;
	console.log(convertedValue);

}

function toFahrenheit () {
	// var cToF = newTempF(document.getElementById("fahrenheit"));
	var userInput = parseInt (document.getElementById("userinput").value);
	var fToC = (cToF * (9/5)) + 32;
	document.getElementById("convertedvalue").value;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if(document.getElementById("FtoC").checked) {
  	toCelsius()
  	}
  	else{
  if(document.getElementById("cToF"). checked){
  	toFahrenheit()
  	}
  }
}
  // console.log("event", clickEvent);


// Assign a function to be executed when the button is clicked
document.getElementById("convertbutton").addEventListener("click", determineConverter);