<?php
$user = $_GET['user'];

// jsonReturn = {
//     'id': id,
//     'username': username,
//     'email': email,
//     'discriminator': discriminator,
//     'boostLevel': boostLevel,
//     'dmList': [
    //   {
    //     'username': 'EXDM',
    //     'id': 1,
    //     'status': 'Глобальный чат платформы EXDM'
    //   },
    //   {
    //     'username': 'Dev',
    //     'id': 1,
    //     'status': 'Разработка чего угодно'
    //   }
//     ]
//     }

$user_id = 1;
$username = 'dragonfire';
$email = 'wtf@xd.com';
$discriminator = 1000;
$boost_level = 2;

$data = array(
    "id" => $user_id,
    "username" => $username,
    "email" => $email,
    "discriminator" => $discriminator,
    "boost_level" => $boost_level,
    "dmList" => array(
        array(
            'username' => 'EXDM',
            'id' => 1,
            'status' => 'Глобальный чат платформы EXDM'
        ),
        array(
            'username' => 'Dev',
            'id' => 2,
            'status' => 'Разработка чего угодно'
        )
    )
);

header("Content-Type: application/json");
echo json_encode($data);
?>