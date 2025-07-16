<?php
namespace App\Models;

class Project
{
    private $db;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    public function all(): array
    {
        $stmt = $this->db->query("SELECT * FROM projects ORDER BY id DESC");
        return $stmt->fetchAll();
    }

    public function find($id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM projects WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    public function create(array $data): bool
    {
        $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);
        $sql = "INSERT INTO projects (
        id, title, description, overall_status, property_name, property_description, property_images, user_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $id,
            $data['title'],
            $data['description'],
            $data['overall_status'],
            $data['property_name'],
            $data['property_description'],
            json_encode($data['property_images'] ?? []),
            $data['user_id']
        ]);
    }


    public function update($id, array $data): bool
    {
        $sql = "UPDATE projects SET
            title = ?, description = ?, overall_status = ?,
            property_name = ?, property_description = ?, property_images = ?
            WHERE id = ?";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $data['title'],
            $data['description'],
            $data['overall_status'],
            $data['property_name'],
            $data['property_description'],
            json_encode($data['property_images'] ?? []),
            $id
        ]);
    }

    public function delete($id): bool
    {
        $stmt = $this->db->prepare("DELETE FROM projects WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
