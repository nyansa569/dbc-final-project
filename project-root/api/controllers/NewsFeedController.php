<?php
// namespace App\Controllers;

// use App\Models\NewsFeed;

// class NewsFeedController {
//     private $model;

//     public function __construct(\PDO $db) {
//         $this->model = new NewsFeed($db);
//     }

//     public function create($data) {
//         $required = ['title', 'category', 'content', 'author', 'time'];
//         foreach ($required as $field) {
//             if (empty($data[$field])) return ['error' => "$field is required"];
//         }

//         return $this->model->create($data)
//             ? ['success' => 'News feed created']
//             : ['error' => 'Failed to create news feed'];
//     }

//     public function index() {
//         return $this->model->all();
//     }

//     public function show($id) {
//         $post = $this->model->find($id);
//         return $post ?: ['error' => 'News feed not found'];
//     }

//     public function update($id, $data) {
//         return $this->model->update($id, $data)
//             ? ['success' => 'News feed updated']
//             : ['error' => 'Failed to update news feed'];
//     }

//     public function delete($id) {
//         return $this->model->delete($id)
//             ? ['success' => 'News feed deleted']
//             : ['error' => 'Failed to delete news feed'];
//     }
// }

namespace App\Controllers;

use App\Models\NewsFeed;

require_once __DIR__ . '/../uploadImage.php'; // 👈 include upload helper

class NewsFeedController
{
    private $model;

    public function __construct(\PDO $db)
    {
        $this->model = new NewsFeed($db);
    }

    public function create($data)
    {
        $required = ['title', 'category', 'content', 'author', 'time'];
        foreach ($required as $field) {
            if (empty($data[$field]))
                return ['error' => "$field is required"];
        }

        // Handle images - either from URLs or uploaded files
        if (!isset($data['images']) || empty($data['images'])) {
            $data['images'] = [];
        } elseif (is_string($data['images'])) {
            $data['images'] = [$data['images']];
        }

        // If you still want to support file uploads as an alternative
        $imagePath = handleImageUpload('image');
        if ($imagePath) {
            $data['images'][] = $imagePath;
        }

        // Ensure images is always an array
        $data['images'] = array_filter($data['images']); // remove empty entries
        $data['images'] = array_values($data['images']); // reindex array

        return $this->model->create($data)
            ? ['success' => 'News feed created']
            : ['error' => 'Failed to create news feed'];
    }

    public function index()
    {
        return $this->model->all();
    }

    public function show($id)
    {
        $post = $this->model->find($id);
        return $post ?: ['error' => 'News feed not found'];
    }

    public function update($id, $data)
    {
        $imagePath = handleImageUpload('image');
        if ($imagePath) {
            $data['images'] = json_encode([$imagePath]);
        }

        return $this->model->update($id, $data)
            ? ['success' => 'News feed updated']
            : ['error' => 'Failed to update news feed'];
    }

    public function delete($id)
    {
        return $this->model->delete($id)
            ? ['success' => 'News feed deleted']
            : ['error' => 'Failed to delete news feed'];
    }
}
