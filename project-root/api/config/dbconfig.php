<?php

	// $DB_HOST = 'localhost';
	// $DB_USER = 'root';
	// $DB_PASS = '';
	// $DB_NAME = 'estate_project_db';
	
	// try{
	// 	$DB_con = new PDO("mysql:host={$DB_HOST};dbname={$DB_NAME}",$DB_USER,$DB_PASS);
	// 	$DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	// }
	// catch(PDOException $e){
	// 	echo $e->getMessage();
	// }
	
// class Database {
//     private $host = "127.0.0.1";
//     private $db_name = "estate_project_db";
//     private $username = "root";
//     // private $password = "YourStrong!Passw0rd";
//     private $password = "";
//     public $conn;

//     public function connect() {
//         $this->conn = null;
//         try {
//             $this->conn = new PDO(
//                 "mysql:host={$this->host};dbname={$this->db_name}",
//                 $this->username,
//                 $this->password
//             );
//             $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//             echo json_encode(["message" => "Connected to MySQL database successfully."]);
//         } catch(PDOException $e) {
//             echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
//         }

//         return $this->conn;
//     }
// }

namespace App\Config;

use PDO;
use PDOException;

class Database {
    private $host = "127.0.0.1";
    private $db_name = "estate_project_db";
    private $username = "root";
    private $password = "";
    public $conn;

    public function connect() {
        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};dbname={$this->db_name}",
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->conn;
        } catch (PDOException $e) {
            echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
            exit;
        }
    }
}
?>
