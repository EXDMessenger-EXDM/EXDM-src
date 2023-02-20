<?php
require $_SERVER['DOCUMENT_ROOT'] . '\config\connection.php';
//mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$json_request = json_decode(file_get_contents('php://input'), true);

$channel_id = $_GET['channel_id'];
$author_name = $json_request['authorName'];
$content = $json_request['message'];
$message_id = rand(1, 2147483647);

mysqli_query($mysql_conn, "INSERT INTO `messages` (`id`, `channel_id`, `author_name`, `content`, `is_pinned`) VALUES ({$message_id}, '{$channel_id}', '{$author_name}', '{$content}', '0')");

// while ($row = mysqli_fetch_assoc($result)) {
//     $moreData = array(
//         1,
//         'global_1',
//         2,
//         'dragonfire',
//         'Hello world!',
//         0
//     );
//     array_push($data, $moreData); 
// }

// echo json_encode($data);
?>