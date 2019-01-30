
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// calculatrice
document.querySelector("#plus").addEventListener("click", () => {
	var value1 = document.getElementById("nbr1").value;
	var value2 = document.getElementById("nbr2").value;
	var total = parseFloat(value1)+parseFloat(value2);

	document.querySelector("#result").value = total;
});
document.querySelector("#moins").addEventListener("click", () => {
	var value1 = document.getElementById("nbr1").value;
	var value2 = document.getElementById("nbr2").value;
	var total = parseFloat(value1)-parseFloat(value2);
	
	document.querySelector("#result").value = total;
});
document.querySelector("#fois").addEventListener("click", () => {
	var value1 = document.getElementById("nbr1").value;
	var value2 = document.getElementById("nbr2").value;
	var total = parseFloat(value1)*parseFloat(value2);
	
	document.querySelector("#result").value = total;
});
document.querySelector("#divise").addEventListener("click", () => {
	var value1 = document.getElementById("nbr1").value;
	var value2 = document.getElementById("nbr2").value;
	var total = parseFloat(value1)/parseFloat(value2);
	
	document.querySelector("#result").value = total;
});



console.log("Hey look in your browser console. It works!");
