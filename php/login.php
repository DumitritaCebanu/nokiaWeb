<?php

include 'conn.php';

$email = 'radu@mail.com';
$password = '321dsa';

$sql = "
		SELECT TOP 1 FROM [USER].[LOG] WHERE EMAIL = :EMAIL
";

$param = array('EMAIL' => $email);

try{
	$stmt = $conn->prepare($sql);
	$stmt -> execute($param);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

	if($result[0]['PASSWORD'] == hash('sha256', $password.result[0]['SALT'])){
		echo 'Email and password are correct';
	}else{
		echo "Wrong credentials, please try again";
	}
}catch(Exeption $e){
	echo "Fail";
}