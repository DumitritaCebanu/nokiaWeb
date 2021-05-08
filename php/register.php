<?php

include 'conn.php';

if (isset($_SERVER['HTTP_ORIGIN'])) {
// Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
// you want to allow, and if so:
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 1000');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
// may also be using PUT, PATCH, HEAD etc
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
}



if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
}
exit(0);
}

//print_r($_POST);
//die();

$name = $_POST['username'];
//$email = $_POST['email'];
$password = $_POST['password'];

//$name = 'asd';
//$email = '';
//$password = 'asd123';


//$method = $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));

//if(!$conn){
    //die("Connection failed: ". mysqli_connect_error());
//}

$password = hash('sha256', $password);

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$salt = generateRandomString(10);


//switch($method){
    //case 'GET':
        //$name = $_GET['name'];
        //$email = $_GET['email'];
        //$password = $_GET['password'];
        //$sql = "SELECT * FROM [USER].[LOG]". ($email? "WHERE email=$email":'');
        //break;
    //case 'POST':
        //$name = $_POST['name'];
                //$email = $_POST['email'];
                //$password = $_POST['password'];
        $sql = "
                INSERT INTO [USER].[LOG]
                    ([NUME],[PASSWORD],[SALT],[DATE])
                values(
                    :NUME,
                    :PASSWORD,
                    :SALT,
                    GETDATE()
                )
                ";
               // break;
   //}



$param = array(
		'NUME' => $name,
		//'EMAIL' => $email,
		'PASSWORD' => $password,
		'SALT' => $salt
);

$stmt = $conn->prepare($sql);

try{

	$stmt->execute($param);

	echo "Inserted succesfully";

} catch (Exception $e){
	echo "Insertion Failed";
}


// run SQL statement
//$result = mysqli_query($conn,$sql);

// die if SQL statement failed
//if (!$result) {
 // http_response_code(404);
 // die(mysqli_error($conn));
//}

//if ($method == 'GET') {
    //if (!$email) echo '[';
    //for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      //echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    //}
    //if (!$email) echo ']';
//  } elseif ($method == 'POST') {
//   echo json_encode($result);
 // } else {
 //   echo mysqli_affected_rows($con);
  //}

//$con->close();

