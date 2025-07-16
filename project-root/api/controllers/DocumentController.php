<?php
// namespace App\Controllers;

// use App\Models\Document;

// class DocumentController {
//     private $docModel;

//     public function __construct(\PDO $db) {
//         $this->docModel = new Document($db);
//     }

//     public function index() {
//         return $this->docModel->all();
//     }

//     public function show($id) {
//         $doc = $this->docModel->findById($id);
//         return $doc ?: ['error' => 'Document not found'];
//     }

//     public function create($data) {
//         $required = ['title', 'document_type', 'uploaded_by', 'date', 'property_details', 'customer_details'];
//         foreach ($required as $field) {
//             if (empty($data[$field])) {
//                 return ['error' => "$field is required"];
//             }
//         }

//         if ($this->docModel->create($data)) {
//             return ['success' => 'Document created successfully'];
//         }

//         return ['error' => 'Failed to create document'];
//     }

//     public function update($id, $data) {
//         if ($this->docModel->update($id, $data)) {
//             return ['success' => 'Document updated'];
//         }
//         return ['error' => 'Failed to update document'];
//     }

//     public function delete($id) {
//         if ($this->docModel->delete($id)) {
//             return ['success' => 'Document deleted'];
//         }
//         return ['error' => 'Failed to delete document'];
//     }
// }
namespace App\Controllers;

use App\Models\Document;

class DocumentController
{
    private $docModel;

    public function __construct(\PDO $db)
    {
        $this->docModel = new Document($db);
    }

    public function index()
    {
        return $this->docModel->all();
    }

    public function show($id)
    {
        return $this->docModel->findById($id) ?? ['error' => 'Document not found'];
    }

    public function create()
    {
        // $data = $_POST;
        $data = json_decode(file_get_contents("php://input"), true) ?? [];

        error_log('Received data: ' . print_r($data, true));


        // Validate required fields
        $required = ['title', 'document_type', 'user_id', 'property_details', 'customer_details'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                return ['error' => "Missing required field: $field"];
            }
        }
        $data['property_details'] = is_array($data['property_details'])
            ? json_encode($data['property_details'])
            : $data['property_details'];

        $data['customer_details'] = is_array($data['customer_details'])
            ? json_encode($data['customer_details'])
            : $data['customer_details'];

        if (isset($data['agents']) && is_array($data['agents'])) {
            $data['agents'] = json_encode($data['agents']);
        }


        return $this->docModel->create($data)
            ? ['success' => true, 'id' => $data['id'] ?? null]
            : ['error' => 'Document creation failed'];
    }

    public function update($id, $data)
    {
        return $this->docModel->update($id, $data)
            ? ['success' => true]
            : ['error' => 'Update failed'];
    }

    public function delete($id)
    {
        return $this->docModel->delete($id)
            ? ['success' => true]
            : ['error' => 'Deletion failed'];
    }
}