<?php
// require __DIR__ . '/../vendor/autoload.php';
// require __DIR__ . './';

// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json");

// $response = [
//     "status" => "success",
//     "message" => "Real Estate API is working!"
// ];

// echo json_encode($response);



// Enable CORS
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

// // Route all requests through your routes.php
// require_once __DIR__ . '/../api/routes/routes.php';

// Allow credentials from a specific origin (not *)
$allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '*';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
}

// Always set these headers
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight OPTIONS request early
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Finally load the routes
require_once __DIR__ . '/../api/routes/routes.php';
?>