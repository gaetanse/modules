<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$connection=new mysqli("localhost", "root", "", "u448364282_testModules");

if (!$connection){
    die ("Connection impossible");
}
else {

    if (isset($_GET['id'])) {
        $id = $connection->real_escape_string($_GET['id']);
        $result = $connection->query("SELECT * FROM datas WHERE id = '$id'");
    } 
    else {
        $result = $connection->query("SELECT * FROM datas");
    }
    $bigObj = array(); 
    while ($row = $result->fetch_assoc()) {
        $obj = array(); 
        $obj['id'] = $row['id'];
        $obj['name'] = $row['name'];
        $obj['uv'] = $row['uv'];
        array_push($bigObj, $obj); 
    }
    echo json_encode($bigObj); 
}

?>