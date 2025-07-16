<?php
// namespace App\Controllers;

// use App\Models\Project;
// use App\Models\ProjectProgress;

// class ProjectController {
//     private $projectModel;
//     private $progressModel;

//     public function __construct(\PDO $db) {
//         $this->projectModel = new Project($db);
//         $this->progressModel = new ProjectProgress($db);
//     }

//     public function index() {
//         return $this->projectModel->all();
//     }

//     public function show($id) {
//         $project = $this->projectModel->find($id);
//         if (!$project) return ['error' => 'Project not found'];

//         $progresses = $this->progressModel->allByProject($id);
//         $project['progress_details'] = $progresses;
//         return $project;
//     }

//     public function create($data) {
//         return $this->projectModel->create($data)
//             ? ['success' => 'Project created']
//             : ['error' => 'Failed to create project'];
//     }

//     public function update($id, $data) {
//         return $this->projectModel->update($id, $data)
//             ? ['success' => 'Project updated']
//             : ['error' => 'Failed to update project'];
//     }

//     public function delete($id) {
//         return $this->projectModel->delete($id)
//             ? ['success' => 'Project deleted']
//             : ['error' => 'Failed to delete project'];
//     }

//     public function addProgress($projectId, $data) {
//         return $this->progressModel->create($projectId, $data)
//             ? ['success' => 'Progress added']
//             : ['error' => 'Failed to add progress'];
//     }

//     public function updateProgress($progressId, $data) {
//         return $this->progressModel->update($progressId, $data)
//             ? ['success' => 'Progress updated']
//             : ['error' => 'Failed to update progress'];
//     }

//     public function deleteProgress($progressId) {
//         return $this->progressModel->delete($progressId)
//             ? ['success' => 'Progress deleted']
//             : ['error' => 'Failed to delete progress'];
//     }
// }



// namespace App\Controllers;

// use App\Models\Project;
// use App\Models\ProjectProgress;

// require_once __DIR__ . '/../uploadImage.php'; 

// class ProjectController {
//     private $projectModel;
//     private $progressModel;

//     public function __construct(\PDO $db) {
//         $this->projectModel = new Project($db);
//         $this->progressModel = new ProjectProgress($db);
//     }

//     public function index() {
//         return $this->projectModel->all();
//     }

//     public function show($id) {
//         $project = $this->projectModel->find($id);
//         if (!$project) return ['error' => 'Project not found'];

//         $progresses = $this->progressModel->allByProject($id);
//         $project['progress_details'] = $progresses;
//         return $project;
//     }

//     public function create($data) {
//         $imagePath = handleImageUpload('image');
//         if ($imagePath) {
//             $data['property_images'] = [$imagePath]; // wrap in array
//         }

//         return $this->projectModel->create($data)
//             ? ['success' => 'Project created']
//             : ['error' => 'Failed to create project'];
//     }

//     public function update($id, $data) {
//         $imagePath = handleImageUpload('image');
//         if ($imagePath) {
//             $data['property_images'] = [$imagePath]; // wrap in array
//         }

//         return $this->projectModel->update($id, $data)
//             ? ['success' => 'Project updated']
//             : ['error' => 'Failed to update project'];
//     }

//     public function delete($id) {
//         return $this->projectModel->delete($id)
//             ? ['success' => 'Project deleted']
//             : ['error' => 'Failed to delete project'];
//     }

//     public function addProgress($projectId, $data) {
//         $imagePath = handleImageUpload('progress_image');
//         if ($imagePath) {
//             $data['images'] = [$imagePath]; // wrap in array
//         }

//         return $this->progressModel->create($projectId, $data)
//             ? ['success' => 'Progress added']
//             : ['error' => 'Failed to add progress'];
//     }

//     public function updateProgress($progressId, $data) {
//         $imagePath = handleImageUpload('progress_image');
//         if ($imagePath) {
//             $data['images'] = [$imagePath];
//         }

//         return $this->progressModel->update($progressId, $data)
//             ? ['success' => 'Progress updated']
//             : ['error' => 'Failed to update progress'];
//     }

//     public function deleteProgress($progressId) {
//         return $this->progressModel->delete($progressId)
//             ? ['success' => 'Progress deleted']
//             : ['error' => 'Failed to delete progress'];
//     }
// }

namespace App\Controllers;

use App\Models\Project;
use App\Models\ProjectProgress;

require_once __DIR__ . '/../uploadImage.php';

class ProjectController
{
    private $projectModel;
    private $progressModel;

    public function __construct(\PDO $db)
    {
        $this->projectModel = new Project($db);
        $this->progressModel = new ProjectProgress($db);
    }

    // GET /projects
    public function index()
    {
        return $this->projectModel->all();
    }

    // GET /projects/{id}
    public function show($id)
    {
        $project = $this->projectModel->find($id);
        if (!$project) {
            return ['error' => 'Project not found'];
        }

        $progresses = $this->progressModel->allByProject($id);
        $project['progress_details'] = $progresses;

        return $project;
    }

    // POST /projects
    public function create()
    {
        error_log('POST: ' . print_r($_POST, true));
        error_log('FILES: ' . print_r($_FILES, true));
        $data = $_POST;
        $imagePath = handleImageUpload('image');
        if ($imagePath) {
            $data['property_images'] = [$imagePath];
        } else {
            $data['property_images'] = [];
        }

        return $this->projectModel->create($data)
            ? ['success' => 'Project created']
            : ['error' => 'Failed to create project'];
    }

    // PUT /projects/{id}
    public function update($id)
    {
        error_log('POST: ' . print_r($_POST, true));
        error_log('FILES: ' . print_r($_FILES, true));
        $data = $_POST;
        $existing = $this->projectModel->find($id);
        if (!$existing) {
            return ['error' => 'Project not found'];
        }

        $imagePath = handleImageUpload('image');
        if ($imagePath) {
            $data['property_images'] = [$imagePath];
        } else {
            $data['property_images'] = $existing['property_images'] ?? [];
        }

        return $this->projectModel->update($id, $data)
            ? ['success' => 'Project updated']
            : ['error' => 'Failed to update project'];
    }

    // DELETE /projects/{id}
    public function delete($id)
    {
        return $this->projectModel->delete($id)
            ? ['success' => 'Project deleted']
            : ['error' => 'Failed to delete project'];
    }

    // POST /projects/{id}/progress
    public function addProgress($projectId)
    {
        error_log('POST: ' . print_r($_POST, true));
        error_log('FILES: ' . print_r($_FILES, true));
        $data = $_POST;

        $imagePath = handleImageUpload('progress_image');
        if ($imagePath) {
            $data['images'] = [$imagePath];
        } else {
            $data['images'] = [];
        }

        return $this->progressModel->create($projectId, $data)
            ? ['success' => 'Progress added']
            : ['error' => 'Failed to add progress'];
    }

    // PUT /progress/{progressId}
    public function updateProgress($progressId)
    {
        error_log('POST: ' . print_r($_POST, true));
        error_log('FILES: ' . print_r($_FILES, true));

        $existing = $this->progressModel->find($progressId);
        if (!$existing) {
            return ['error' => 'Progress not found'];
        }
        $data = $_POST;

        $imagePath = handleImageUpload('progress_image');
        if ($imagePath) {
            $data['images'] = [$imagePath];
        } else {
            $data['images'] = $existing['images'] ?? [];
        }

        return $this->progressModel->update($progressId, $data)
            ? ['success' => 'Progress updated']
            : ['error' => 'Failed to update progress'];
    }

    // DELETE /progress/{progressId}
    public function deleteProgress($progressId)
    {
        return $this->progressModel->delete($progressId)
            ? ['success' => 'Progress deleted']
            : ['error' => 'Failed to delete progress'];
    }
}
