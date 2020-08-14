// navigating through tabs
function openTab (evt, title) {
	var i, tabcontent, tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	//console.log("tabcontent changed");
	
	tablinks = document.getElementsByClassName("nav-link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	//console.log("tablinks changed to inactive");
	
	document.getElementById(title).style.display = "block";
	evt.currentTarget.className += "active";
	//console.log(title + " tab opened");
	
	if (title == "locality") {
		document.getElementsByClassName("header").innerHTML = "Home";
	}
}

