<?php
if(!isset($_COOKIE['auth_token'])) {
    // no cookie
    header("Location: /app/login.html");
}
else {
    // yes cookie
    header("Location: /app/app.html");
}
?>