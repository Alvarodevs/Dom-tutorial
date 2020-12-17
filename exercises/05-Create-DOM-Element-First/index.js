var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

var newParag = document.createElement("p");
newParag.innerHTML = "Hello World";
newParag.style.background = "yellow";
document.body.appendChild(newParag);
