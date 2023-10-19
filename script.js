// This is a function that is set up to be triggered via an onclick when the "Convert" button in HTML is clicked.
function unitConverter() {
	/*
Event.preventDefault is a method used to prevent default behavior on a web page. In this case, it prevents a form from being reset when the button is clicked. "e" is "event" as an abbreviation. The term "event" is deprecated, but we use it for clarity, despite a dash through the error.
*/
// event.preventDefault();

	/*
We define variables that retrieve information from the HTML document inside the function.
We do this so that the values ​​we retrieve are updated every time the button is clicked.
*/
// Get the value from an element with ID "myInputID".
	const myInput = document.querySelector("#myInputID").value;
	console.log(myInput); // Log the value to the console for debugging.

	
// Get the value from an element with ID "fromValueID".
	const fromValue = document.querySelector("#fromValueID").value;
	console.log(fromValue); // Log the value to the console for debugging.

	// Get the value from an element with ID "toValueID".
	const toValue = document.querySelector("#toValueID").value;
	console.log(toValue); 
	// Log the value to the console for debugging.

	// Get the value from an element with ID "displayValueID".
	const displayValue = document.querySelector("#displayValueID");
	console.log(displayValue); // Log the value to the console for debugging.

	
// We set up an empty variable to store the result that is calculated in the subsequent if/else statements.
	let result;

	/*
An if/else statement that checks whether the "fromValue" and "toValue" variables match, so that the correct mathematical operation can be performed.
*/
	if (fromValue === "cm" && toValue === "m") {
		result = myInput / 100; // Convert centimeters to meters.
	} else if (fromValue === "cm" && toValue === "km") {
		result = myInput / 100000; // Convert centimeters to kilometers.
	} else if (fromValue === "m" && toValue === "cm") {
		result = myInput * 100; // Convert meters to centimeters.
	} else if (fromValue === "m" && toValue === "km") {
		result = myInput / 1000; // Convert meters to kilometers.
	} else if (fromValue === "km" && toValue === "cm") {
		result = myInput * 100000; // Convert kilometers to centimeters.
	} else if (fromValue === "km" && toValue === "m") {
		result = myInput * 1000; 
		// Convert kilometers to meters.
	} else {
	}

	
// When we have a result from the if / else expression, we want to display it on our website.
// We use ".toFixed()" to limit the number of decimal places in the result to 3.
	displayValue.textContent = result.toFixed(3);
}