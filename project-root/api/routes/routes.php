<?php
// api/routes/routes.php
// require __DIR__ . '/../../vendor/autoload.php';
// require __DIR__ . '/../../api/config/dbconfig.php';

// Enable CORS
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json");

// // Simple test endpoint
// if ($_SERVER['REQUEST_URI'] === '/project-root/public/hello') {
//     echo json_encode(['status' => 'success', 'message' => 'Hello from Real Estate API!']);
//     exit;
// }

// // Handle requests
// $data = json_decode(file_get_contents('php://input'), true);

// // Simple test endpoint
// if ($requestUri === 'hello') {
//     echo json_encode(['message' => 'Hello World from Real Estate API!']);
//     exit;
// }

// switch ($_GET['action']) {
//     case 'register':
//         echo json_encode($authController->register($data));
//         exit;

//     case 'login':
//         echo json_encode($authController->login($data));
//         exit;

//     case 'forgot-password':
//         echo json_encode($authController->forgotPassword($data['email']));
//         exit;

//     case 'logout':
//         echo json_encode($authController->logout());
//         exit;

//     case 'check-auth':
//         echo json_encode($authController->checkAuth());
//         exit;

//     default:
//         http_response_code(404);
//         echo json_encode(['error' => 'Action not found']);
// } -->

// use App\Config\Database;
// require __DIR__ . '/../../vendor/autoload.php';
// require __DIR__ . '/../../api/config/dbconfig.php';

// $dbInstance = new Database();
// $db = $dbInstance->connect();


// // Initialize AuthController
// $authController = new App\Controllers\AuthController($db);

// // Enable CORS
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json");

// // Get clean request URI
// $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// // $requestUri = str_replace('/project-root/public', '', $requestUri); // Remove XAMPP path prefix
// $requestUri = trim($_SERVER['REQUEST_URI'], '/');
// $requestUri = trim($requestUri, '/');

// // Simple test endpoint
// if ($requestUri === 'hello') {
//     echo json_encode(['status' => 'success', 'message' => 'API is working!']);
//     exit;
// }

// // Get request data
// $data = json_decode(file_get_contents('php://input'), true) ?? [];

// // Handle API routes
// switch ($requestUri) {
//     case 'register':
//         echo json_encode($authController->register($data));
//         exit;

//     case 'login':
//         echo json_encode($authController->login($data));
//         exit;

//     case 'forgot-password':
//         echo json_encode($authController->forgotPassword($data['email'] ?? ''));
//         exit;

//     case 'logout':
//         echo json_encode($authController->logout());
//         exit;

//     case 'check-auth':
//         echo json_encode($authController->checkAuth());
//         exit;

//     default:
//         http_response_code(404);
//         echo json_encode(['error' => 'Endpoint not found']);
// }




// use App\Controllers\AuthController;
// use App\Config\Database;

// require __DIR__ . '/../../api/config/dbconfig.php';
// require __DIR__ . '/../models/User.php';
// require __DIR__ . '/../controllers/AuthController.php';

// // Connect to database
// $dbInstance = new Database();
// $db = $dbInstance->connect();

// // Initialize AuthController
// $authController = new AuthController($db);

// // Enable CORS
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

// // Parse request
// $requestUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
// $data = json_decode(file_get_contents('php://input'), true) ?? [];

// // Routing
// switch ($requestUri) {
//     case 'hello':
//         echo json_encode(['status' => 'success', 'message' => 'API is working!']);
//         exit;

//     case 'register':
//         echo json_encode($authController->register($data));
//         exit;

//     case 'login':
//         echo json_encode($authController->login($data));
//         exit;

//     case 'forgot-password':
//         echo json_encode($authController->forgotPassword($data['email'] ?? ''));
//         exit;

//     case 'logout':
//         echo json_encode($authController->logout());
//         exit;

//     case 'check-auth':
//         echo json_encode($authController->checkAuth());
//         exit;

//     default:
//         http_response_code(404);
//         echo json_encode(['error' => 'Endpoint not found']);
// }

// use App\Controllers\AuthController;
// use App\Controllers\PropertyController;
// use App\Config\Database;

// // Autoload classes
// require_once __DIR__ . '/../../vendor/autoload.php';
// require_once __DIR__ . '/../models/User.php';
// require_once __DIR__ . '/../models/Property.php';
// require_once __DIR__ . '/../controllers/AuthController.php';
// require_once __DIR__ . '/../controllers/PropertyController.php';
// require_once __DIR__ . '/../config/dbconfig.php';

// // Enable CORS
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

// // Connect to database
// $dbInstance = new Database();
// $db = $dbInstance->connect();

// // Initialize controllers
// $authController = new AuthController($db);
// $propertyController = new PropertyController($db);

// // Parse request
// $requestUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
// $requestUri = str_replace('project-root/public/', '', $requestUri); // Adjust if needed
// $method = $_SERVER['REQUEST_METHOD'];
// $data = json_decode(file_get_contents('php://input'), true) ?? [];

// // Hello test
// if ($requestUri === 'hello') {
//     echo json_encode(['status' => 'success', 'message' => 'Real Estate API is working!']);
//     exit;
// }

// // Auth routes
// switch ("$method $requestUri") {
//     case 'POST register':
//         echo json_encode($authController->register($data));
//         exit;

//     case 'POST login':
//         echo json_encode($authController->login($data));
//         exit;

//     case 'POST forgot-password':
//         echo json_encode($authController->forgotPassword($data['email'] ?? ''));
//         exit;

//     case 'GET logout':
//         echo json_encode($authController->logout());
//         exit;

//     case 'GET check-auth':
//         echo json_encode($authController->checkAuth());
//         exit;

//     // Property routes
//     case 'GET properties':
//         echo json_encode($propertyController->index());
//         exit;

//     case 'POST properties':
//         echo json_encode($propertyController->create($data));
//         exit;

//     case (preg_match('#^GET properties/(\d+)$#', $requestUri, $matches) ? true : false):
//         echo json_encode($propertyController->show($matches[1]));
//         exit;

//     case (preg_match('#^PUT properties/(\d+)$#', $requestUri, $matches) ? true : false):
//         echo json_encode($propertyController->update($matches[1], $data));
//         exit;

//     case (preg_match('#^DELETE properties/(\d+)$#', $requestUri, $matches) ? true : false):
//         echo json_encode($propertyController->delete($matches[1]));
//         exit;

//     default:
//         http_response_code(404);
//         echo json_encode(['error' => 'Endpoint not found']);
//         exit;
// }


use App\Controllers\AuthController;
use App\Controllers\PropertyController;
use App\Controllers\OfferOrDealController;
use App\Config\Database;
use App\Controllers\DocumentController;
use App\Controllers\NewsFeedController;
use App\Controllers\ProjectController;

// Autoload classes
require_once __DIR__ . '/../../vendor/autoload.php';
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../models/Property.php';
require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/PropertyController.php';
require_once __DIR__ . '/../config/dbconfig.php';
require_once __DIR__ . '/../models/Customer.php';
require_once __DIR__ . '/../controllers/CustomerController.php';
require_once __DIR__ . '/../models/Document.php';
require_once __DIR__ . '/../controllers/DocumentController.php';
require_once __DIR__ . '/../models/NewsFeed.php';
require_once __DIR__ . '/../controllers/NewsFeedController.php';
require_once __DIR__ . '/../models/Project.php';
require_once __DIR__ . '/../models/ProjectProgress.php';
require_once __DIR__ . '/../controllers/ProjectController.php';


// Enable CORS
// header("Access-Control-Allow-Origin: *");
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

// Connect to database
$dbInstance = new Database();
$db = $dbInstance->connect();
// Initialize controllers
$authController = new AuthController($db);
$propertyController = new PropertyController($db);
$offerOrDealController = new OfferOrDealController($db);
$documentController = new DocumentController($db);
$newsFeedController = new NewsFeedController($db);
$projectController = new ProjectController($db);
// $authController = new authController($db);
// Parse request
$requestUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$requestUri = str_replace('project-root/public/', '', $requestUri); // Adjust base path if needed
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true) ?? [];


error_log("METHOD: $method");
error_log("REQUEST_URI: $requestUri");


// Test route
if ($requestUri === 'hello') {
    echo json_encode(['status' => 'success', 'message' => 'Real Estate API is working!']);
    exit;
}

if ($method === 'GET' && preg_match('#^users/(\w+)$#', $requestUri, $matches)) {
    echo json_encode($authController->getUserById($matches[1]));
    exit;
}


// Handle dynamic property routes
// if ($method === 'GET' && preg_match('#^properties/(\d+)$#', $requestUri, $matches)) {
//     echo json_encode($propertyController->show($matches[1]));
//     exit;
// }

// if ($method === 'PUT' && preg_match('#^properties/(\d+)$#', $requestUri, $matches)) {
//     echo json_encode($propertyController->update($matches[1], $data));
//     exit;
// }
if ($method === 'POST' && preg_match('#^properties/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($propertyController->update($matches[1]));
    exit;
}



if ($method === 'DELETE' && preg_match('#^properties/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($propertyController->delete($matches[1]));
    exit;
}

if ($method === 'GET' && $requestUri === 'documents') {
    echo json_encode($documentController->index());
    exit;
}

if ($method === 'POST' && $requestUri === 'documents') {
    echo json_encode($documentController->create());
    exit;
}

if ($method === 'GET' && preg_match('#^documents/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($documentController->show($matches[1]));
    exit;
}

if ($method === 'POST' && preg_match('#^documents/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($documentController->update($matches[1], $data));
    exit;
}

if ($method === 'DELETE' && preg_match('#^documents/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($documentController->delete($matches[1]));
    exit;
}


if ($method === 'GET' && $requestUri === 'news-feeds') {
    echo json_encode($newsFeedController->index());
    exit;
}

if ($method === 'POST' && $requestUri === 'news-feeds') {
    echo json_encode($newsFeedController->create($data));
    exit;
}

if ($method === 'GET' && preg_match('#^news-feeds/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($newsFeedController->show($matches[1]));
    exit;
}

if ($method === 'PUT' && preg_match('#^news-feeds/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($newsFeedController->update($matches[1], $data));
    exit;
}

if ($method === 'DELETE' && preg_match('#^news-feeds/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($newsFeedController->delete($matches[1]));
    exit;
}


// Routes for projects
if ($method === 'GET' && $requestUri === 'projects') {
    echo json_encode($projectController->index());
    exit;
}

if ($method === 'POST' && $requestUri === 'projects') {
    echo json_encode($projectController->create());
    exit;
}

if ($method === 'GET' && preg_match('#^projects/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($projectController->show($matches[1]));
    exit;
}

if ($method === 'POST' && preg_match('#^projects/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($projectController->update($matches[1]));
    exit;
}

if ($method === 'DELETE' && preg_match('#^projects/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($projectController->delete($matches[1]));
    exit;
}

// Routes for project progress
if ($method === 'POST' && preg_match('#^projects/(\d+)/progress$#', $requestUri, $matches)) {
    echo json_encode($projectController->addProgress($matches[1], ));
    exit;
}

if ($method === 'POST' && preg_match('#^progress/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($projectController->updateProgress($matches[1]));
    exit;
}

if ($method === 'DELETE' && preg_match('#^progress/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($projectController->deleteProgress($matches[1]));
    exit;
}


// Add this with your other route definitions (before the switch statement)
if ($method === 'PUT' && preg_match('#^users/(\d+)$#', $requestUri, $matches)) {
    echo json_encode($authController->update($matches[1]));
    exit;
}


// Auth routes
switch ("$method $requestUri") {
    case 'GET users':
        echo json_encode($authController->index());
        exit;

    case (preg_match('#^GET users/(\w+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($authController->show($matches[1]));
        exit;

    // case 'POST users':
    //     echo json_encode($authController->store());
    //     exit;

    case (preg_match('#^PUT users/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($authController->update($matches[1]));
        exit;
    // case (preg_match('#^PUT /?users/(\w+)$#i', $requestUri, $matches) ? true : false):
    //     echo json_encode($authController->update($matches[1]));
    //     exit;

    case (preg_match('#^DELETE users/(\w+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($authController->destroy($matches[1]));
        exit;

    case (preg_match('#^POST users/(\w+)/change-password$#', $requestUri, $matches) ? true : false):
        echo json_encode($authController->changePassword($matches[1]));
        exit;
    case 'POST register':
        echo json_encode($authController->register($data));
        exit;

    case 'POST login':
        echo json_encode($authController->login($data));
        exit;

    case 'POST forgot-password':
        echo json_encode($authController->forgotPassword($data['email'] ?? ''));
        exit;

    case 'GET logout':
        echo json_encode($authController->logout());
        exit;

    case 'GET check-auth':
        echo json_encode($authController->checkAuth());
        exit;

    case 'GET properties':
        echo json_encode($propertyController->index());
        exit;

    case 'POST properties':
        echo json_encode($propertyController->create());
        exit;
    // Customer routes
    case 'GET customers':
        echo json_encode($customerController->index());
        exit;
    case 'POST customers':
        echo json_encode($customerController->create($data));
        exit;

    case (preg_match('#^GET customers/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($customerController->show($matches[1]));
        exit;

    case (preg_match('#^PUT customers/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($customerController->update($matches[1], $data));
        exit;

    case (preg_match('#^DELETE customers/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($customerController->delete($matches[1]));
        exit;
    // CREATE
    case $method === 'POST' && $requestUri === 'offers-deals':
        echo json_encode($offerOrDealController->create($data));
        exit;
    // READ ALL
    case $method === 'GET' && $requestUri === 'offers-deals':
        echo json_encode($offerOrDealController->index());
        exit;
    // READ ONE
    case $method === 'GET' && preg_match('#^offers-deals/(\d+)$#', $requestUri, $matches):
        echo json_encode($offerOrDealController->show($matches[1]));
        exit;
    // UPDATE
    case $method === 'PUT' && preg_match('#^offers-deals/(\d+)$#', $requestUri, $matches):
        echo json_encode($offerOrDealController->update($matches[1], $data));
        exit;
    // DELETE
    case $method === 'DELETE' && preg_match('#^offers-deals/(\d+)$#', $requestUri, $matches):
        echo json_encode($offerOrDealController->delete($matches[1]));
        exit;
    case 'GET documents':
        echo json_encode($documentController->index());
        exit;

    case 'POST documents':
        echo json_encode($documentController->create());
        exit;

    case (preg_match('#^GET documents/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($documentController->show($matches[1]));
        exit;

    case (preg_match('#^PUT documents/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($documentController->update($matches[1], $data));
        exit;

    case (preg_match('#^DELETE documents/(\d+)$#', $requestUri, $matches) ? true : false):
        echo json_encode($documentController->delete($matches[1]));
        exit;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Route not found', 'method' => $method, 'uri' => $requestUri]);
        exit;
}


// Fallback route
// http_response_code(404);
// echo json_encode(['error' => 'Endpoint not found']);
