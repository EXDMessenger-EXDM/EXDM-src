<?php
echo 'not implemented';
http_response_code(501);
exit();

require $_SERVER['DOCUMENT_ROOT'] . '\config\connection.php';
require $_SERVER['DOCUMENT_ROOT'] . '\lib\randomString.php';

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

$user_id = rand(1, 2147483647);
$random_id = rand(1, 2147483647);
$random_str = generateRandomString(30);
$base64_userid = base64_encode($user_id);
$authToken = "{$base64_userid}.{$random_id}.{$random_str}";

// $result = mysqli_query($mysql_conn, "INSERT INTO users VALUES ({$user_id}, "{$username}", "{$password}", "{$email}", "{$authToken}", {$discriminator}, 0)");
// $row = mysqli_fetch_assoc($result);
// echo $row['auth_token'];
// echo $authToken;
?>