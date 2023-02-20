<?php
require $_SERVER['DOCUMENT_ROOT'] . '\config\connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $username = $_GET['username'];
    $password = $_GET['password'];
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
}

$result = mysqli_query($mysql_conn, "SELECT auth_token FROM `users` WHERE username = '{$username}' AND password = '{$password}'");
$row = mysqli_fetch_assoc($result);
echo $row['auth_token'];
?>