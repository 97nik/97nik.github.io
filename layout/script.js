menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav')
	// body...
	if(x.className === "topnav"){
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}