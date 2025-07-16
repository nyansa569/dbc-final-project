<?php
// namespace App\Controllers;

// use App\Models\Customer;

// class CustomerController {
//     private $customerModel;

//     public function __construct(\PDO $db) {
//         $this->customerModel = new Customer($db);
//     }

//     public function create($data) {
//         $required = ['customer_name', 'customer_email', 'customer_phone', 'property_name', 'property_description', 'property_price', 'date'];
//         foreach ($required as $field) {
//             if (empty($data[$field])) {
//                 return ['error' => "$field is required"];
//             }
//         }

//         if ($this->customerModel->create($data)) {
//             return ['success' => 'Customer record created'];
//         }

//         return ['error' => 'Failed to create customer record'];
//     }

//     public function index() {
//         return $this->customerModel->all();
//     }

//     public function show($id) {
//         $record = $this->customerModel->findById($id);
//         return $record ? $record : ['error' => 'Customer not found'];
//     }

//     public function update($id, $data) {
//         if ($this->customerModel->update($id, $data)) {
//             return ['success' => 'Customer updated'];
//         }
//         return ['error' => 'Failed to update customer'];
//     }

//     public function delete($id) {
//         if ($this->customerModel->delete($id)) {
//             return ['success' => 'Customer deleted'];
//         }
//         return ['error' => 'Failed to delete customer'];
//     }
// }

namespace App\Controllers;

use App\Models\OfferOrDeal;

class OfferOrDealController {
    private $model;

    public function __construct(\PDO $db) {
        $this->model = new OfferOrDeal($db);
    }

    public function create($data) {
        $required = [
            'customer_name', 'customer_email', 'customer_phone',
            'property_name', 'property_description', 'property_price', 'date'
        ];

        foreach ($required as $field) {
            if (empty($data[$field])) {
                return ['error' => "$field is required"];
            }
        }

        if ($this->model->create($data)) {
            return ['success' => 'Record created successfully'];
        }

        return ['error' => 'Failed to create record'];
    }

    public function index() {
        return $this->model->all();
    }

    public function show($id) {
        $record = $this->model->findById($id);
        return $record ?: ['error' => 'Record not found'];
    }

    // public function update($id, $data) {
    //     if ($this->model->update($id, $data)) {
    //         return ['success' => 'Record updated successfully'];
    //     }
    //     return ['error' => 'Failed to update record'];
    // }
    public function update($id, $data) {
    $existing = $this->model->findById($id);

    if (!$existing) {
        return ['error' => 'Record not found'];
    }

    // Merge existing fields with incoming ones
    $updatedData = array_merge($existing, $data);

    if ($this->model->update($id, $updatedData)) {
        return ['success' => 'Record updated successfully'];
    }

    return ['error' => 'Failed to update record'];
}


    public function delete($id) {
        if ($this->model->delete($id)) {
            return ['success' => 'Record deleted successfully'];
        }
        return ['error' => 'Failed to delete record'];
    }
}
