function getFullYear() {
	var addedString = document.createElement("span");

	addedString.innerHTML = ", we are in the year 2020";

	document.body.appendChild(addedString);
}

window.onload = function() {
	alert("HELLO");
	getFullYear();
};
