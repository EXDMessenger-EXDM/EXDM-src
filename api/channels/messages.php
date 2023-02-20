<?php
require $_SERVER['DOCUMENT_ROOT'] . '\config\connection.php';
//mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$channel_id = $_GET['channel_id'];

$result = mysqli_query($mysql_conn, "SELECT * FROM `messages` WHERE channel_id = '{$channel_id}'");
//$row = mysqli_fetch_assoc($result);

//echo $row;
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    //$moreData = $row;
    array_push($data, $row); 
}

echo json_encode($data);
?>