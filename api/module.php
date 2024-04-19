<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$connection=new mysqli("localhost", "root", "", "u448364282_testModules");

if (!$connection){
    die ("Connection impossible");
}
else {
    $result = $connection->query("SELECT * FROM modules");
    $bigObj = array(); 
    while ($row = $result->fetch_assoc()) {
        $obj = array(); 
        $obj['id'] = $row['id'];
        $obj['name'] = $row['name'];
        $obj['working'] = $row['working'];
        $obj['new_update'] = $row['new_update'];
        $obj['description'] = $row['description'];
        $obj['dataTypeName'] = $row['dataTypeName'];
        $obj['dataType'] = $row['dataType'];
        array_push($bigObj, $obj); 
    }
    echo json_encode($bigObj); 
}

?>