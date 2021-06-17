function validate() {
	var username = document.getElementById("Uname").value;
	var password = document.getElementById("Pass").value;
	if ( username == "admin" && password == "pass"){
		window.location = "../../find_id.html";
	} else {
		alert("Pengguna atau Password Keliru");
	}
}