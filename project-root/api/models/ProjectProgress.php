<?php
namespace App\Models;

class ProjectProgress {
    private $db;

    public function __construct(\PDO $db) {
        $this->db = $db;
    }

    public function allByProject($projectId): array {
        $stmt = $this->db->prepare("SELECT * FROM project_progress WHERE project_id = ? ORDER BY id ASC");
        $stmt->execute([$projectId]);
        return $stmt->fetchAll();
    }

    public function create($projectId, array $data): bool {
        $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);
        $sql = "INSERT INTO project_progress (
            id, project_id, title, description, images, progress_status,user_id
        ) VALUES (?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $id,
            $projectId,
            $data['title'],
            $data['description'],
            $data['user_id'],
            json_encode($data['images'] ?? []),
            $data['progress_status']
        ]);
    }

    public function update($id, array $data): bool {
        $sql = "UPDATE project_progress SET
            title = ?, description = ?, images = ?, progress_status = ?
            WHERE id = ?";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $data['title'],
            $data['description'],
            json_encode($data['images'] ?? []),
            $data['progress_status'],
            $id
        ]);
    }

    public function find($id): ?array {
    $stmt = $this->db->prepare("SELECT * FROM project_progress WHERE id = ?");
    $stmt->execute([$id]);
    $result = $stmt->fetch();
    return $result ?: null;
}


    public function delete($id): bool {
        $stmt = $this->db->prepare("DELETE FROM project_progress WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
