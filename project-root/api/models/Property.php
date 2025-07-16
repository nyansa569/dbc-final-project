<?php
namespace App\Models;

class Property
{
    private $db;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    public function create(array $data): bool
    {
        // Generate unique ID
        do {
            $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);
            $exists = $this->findById($id);
        } while ($exists);

        $sql = "INSERT INTO properties (
        id, user_id, image, name, location, type, bedrooms,
        bathrooms, area, description, price, status, isVerified
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        $data['isVerified'] = isset($data['isVerified']) && $data['isVerified'] === 'true' ? 1 : 0;
        return $stmt->execute([
            $id,
            $data['user_id'],
            $data['image'],
            $data['name'],
            $data['location'],
            $data['type'],
            $data['bedrooms'] ?? 0,
            $data['bathrooms'] ?? 0,
            $data['area'] ?? 0,
            $data['description'] ?? null,
            $data['price'],
            $data['status'],
            $data['isVerified'] ?? false  
        ]);
    }



    public function update($id, array $data): bool
    {
        $sql = "UPDATE properties SET 
        name = ?, 
        location = ?, 
        type = ?, 
        bedrooms = ?, 
        bathrooms = ?, 
        area = ?, 
        description = ?, 
        price = ?, 
        status = ?, 
        image = ?, 
        isVerified = ?, 
        updated_at = NOW()
        WHERE id = ?";

        $stmt = $this->db->prepare($sql);
        $data['isVerified'] = isset($data['isVerified']) && $data['isVerified'] === 'true' ? 1 : 0;
        return $stmt->execute([
            $data['name'],
            $data['location'],
            $data['type'],
            $data['bedrooms'] ?? 0,
            $data['bathrooms'] ?? 0,
            $data['area'] ?? 0,
            $data['description'] ?? '',
            $data['price'],
            $data['status'],
            $data['image'] ?? null,
            $data['isVerified'] ?? false,  // added here
            $id
        ]);
    }


    public function delete($id): bool
    {
        $stmt = $this->db->prepare("DELETE FROM properties WHERE id = ?");
        return $stmt->execute([$id]);
    }


    public function all(): array
    {
        $stmt = $this->db->query("SELECT * FROM properties ORDER BY created_at DESC");
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function findById(string $id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM properties WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(\PDO::FETCH_ASSOC) ?: null;
    }
}
