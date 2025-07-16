<?php
// namespace App\Controllers;

// use App\Models\Property;

// class PropertyController {
//     private $propertyModel;

//     public function __construct(\PDO $db) {
//         $this->propertyModel = new Property($db);
//     }

//     // CREATE
//     public function create($data) {
//         $required = ['name', 'location', 'type', 'price', 'status'];
//         foreach ($required as $field) {
//             if (empty($data[$field])) {
//                 return ['error' => "$field is required"];
//             }
//         }

//         if ($this->propertyModel->create($data)) {
//             return ['success' => 'Property created successfully'];
//         }

//         return ['error' => 'Failed to create property'];
//     }

//     // READ ALL
//     public function index() {
//         return $this->propertyModel->all();
//     }

//     // READ ONE
//     public function show($id) {
//         $property = $this->propertyModel->findById($id);
//         return $property ? $property : ['error' => 'Property not found'];
//     }

//     // UPDATE
//     public function update($id, $data) {
//         $existing = $this->propertyModel->findById($id);
//         if (!$existing) {
//             return ['error' => 'Property not found'];
//         }

//         if ($this->propertyModel->update($id, $data)) {
//             return ['success' => 'Property updated successfully'];
//         }

//         return ['error' => 'Failed to update property'];
//     }

//     // DELETE
//     public function delete($id) {
//         $existing = $this->propertyModel->findById($id);
//         if (!$existing) {
//             return ['error' => 'Property not found'];
//         }

//         if ($this->propertyModel->delete($id)) {
//             return ['success' => 'Property deleted successfully'];
//         }

//         return ['error' => 'Failed to delete property'];
//     }
// }



// <?php
namespace App\Controllers;

use App\Models\Property;
require_once __DIR__ . '/../uploadImage.php';

class PropertyController
{

    private $propertyModel;

    public function __construct(\PDO $db)
    {
        $this->propertyModel = new Property($db);
    }

    // CREATE
    public function create()
    {
        // Get raw POST data
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        error_log('Received data: ' . print_r($data, true));

        // Validate required fields
        $required = ['name', 'location', 'type', 'price', 'status', 'user_id'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                return ['error' => "$field is required"];
            }
        }

        // Handle image URL (no longer using file upload)
        $data['image'] = $data['image_url'] ?? null;

        return $this->propertyModel->create($data)
            ? ['success' => 'Property created successfully']
            : ['error' => 'Failed to create property'];
    }
    // public function create($data) {
    //     error_log(print_r($data, true));
    //     $required = ['name', 'location', 'type', 'price', 'status'];
    //     foreach ($required as $field) {
    //         if (empty($data[$field])) {
    //             return ['error' => "$field is required"];
    //         }
    //     }

    //     // Use shared image upload handler
    //     $imagePath = handleImageUpload('image');
    //     if ($imagePath) {
    //         $data['image'] = $imagePath;
    //     }

    //     return $this->propertyModel->create($data)
    //         ? ['success' => 'Property created successfully']
    //         : ['error' => 'Failed to create property'];
    // }

    // READ ALL
    public function index()
    {
        return $this->propertyModel->all();
    }

    // READ ONE
    public function show($id)
    {
        $property = $this->propertyModel->findById($id);
        return $property ?: ['error' => 'Property not found'];
    }

    // UPDATE
    // public function update($id, $data)
    // {
    //     error_log('POST: ' . print_r($_POST, true));
    //     error_log('FILES: ' . print_r($_FILES, true));
    //     error_log('data: ' . print_r($$data, true));


    //     $existing = $this->propertyModel->findById($id);
    //     if (!$existing) {
    //         return ['error' => 'Property not found'];
    //     }

    //     // Use shared image upload handler
    //     $imagePath = handleImageUpload('image');
    //     $data['image'] = $imagePath ?: $existing['image'];

    //     return $this->propertyModel->update($id, $data)
    //         ? ['success' => 'Property updated successfully']
    //         : ['error' => 'Failed to update property'];
    // }
    public function update($id)
    {
        error_log('POST: ' . print_r($_POST, true));
        error_log('FILES: ' . print_r($_FILES, true));

        $existing = $this->propertyModel->findById($id);
        if (!$existing) {
            return ['error' => 'Property not found'];
        }

        $data = $_POST;

        // Handle image upload
        // $imagePath = handleImageUpload('image');
        // $data['image'] = $imagePath ?: $existing['image'];

        return $this->propertyModel->update($id, $data)
            ? ['success' => 'Property updated successfully']
            : ['error' => 'Failed to update property'];
    }


    // DELETE
    public function delete($id)
    {
        $existing = $this->propertyModel->findById($id);
        if (!$existing) {
            return ['error' => 'Property not found'];
        }

        return $this->propertyModel->delete($id)
            ? ['success' => 'Property deleted successfully']
            : ['error' => 'Failed to delete property'];
    }
}
