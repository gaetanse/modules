<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$connection=new mysqli("localhost", "root", "", "u448364282_testModules");

if (!$connection){
    die ("Connection impossible");
}
else {
    if (isset($_GET['description']) && isset($_GET['name']) && isset($_GET['dataTypeName']) && isset($_GET['dataType'])) {

        $description = $connection->real_escape_string($_GET['description']);
        $name = $connection->real_escape_string($_GET['name']);
        $dataTypeName = $connection->real_escape_string($_GET['dataTypeName']);
        $dataType = $connection->real_escape_string($_GET['dataType']);

        $result = $connection->query("INSERT INTO modules (new_update, description, name, dataTypeName, dataType, working) VALUES (NOW(), '$description', '$name', '$dataTypeName', '$dataType', false)");
        echo "Module added !";
    } 
    else {
        echo "Module can't be add !";
    }
}

?>