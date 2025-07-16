<?php
require_once "../api/config/dbconfig.php";

use App\Config\Database;

header("Content-Type: application/json");

$db = new Database();
$conn = $db->connect();

echo json_encode(['message' => 'Connected to DB successfully']);
