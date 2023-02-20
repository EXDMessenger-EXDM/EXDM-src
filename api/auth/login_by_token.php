<?php
$auth_token = $_GET['auth_token'];
setcookie('auth_token', $auth_token);
header("Location: /app/app.html");
?>