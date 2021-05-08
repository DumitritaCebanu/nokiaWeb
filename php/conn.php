<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: 'X-Requested-With,content-type'");
header("Access-Control-Allow-Methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE'");
$config = "sqlsrv:Server=tcp:synopsis-playground.database.windows.net,1433;Database=PLAYGROUND";

$conn = new PDO($config, 'playground', 'synopsis123@');