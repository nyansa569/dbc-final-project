<?php
namespace App\Models;

class NewsFeed
{
    private $db;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    public function create(array $data): bool
    {
        $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);

        $sql = "INSERT INTO news_feeds (
            id, title, category, content, author, time, images, is_property,
            property_name, property_location, property_type, bedrooms, bathrooms, area, price, property_status,
            availability
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $id,
            $data['title'],
            $data['category'],
            $data['content'],
            $data['author'],
            $data['time'],
            is_array($data['images']) ? json_encode($data['images']) : $data['images'],
            $data['is_property'] ?? false,
            $data['property_name'] ?? null,
            $data['property_location'] ?? null,
            $data['property_type'] ?? null,
            $data['bedrooms'] ?? null,
            $data['bathrooms'] ?? null,
            $data['area'] ?? null,
            $data['price'] ?? null,
            $data['property_status'] ?? null,
            $data['availability'] ?? null
        ]);
    }

    public function all(): array
    {
        $stmt = $this->db->query("SELECT * FROM news_feeds ORDER BY time DESC");
        $rows = $stmt->fetchAll();

        foreach ($rows as &$row) {
            $row['images'] = json_decode($row['images'], true);
        }

        return $rows;
    }

    public function find($id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM news_feeds WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch();

        if ($row) {
            // $row['images'] = json_decode($row['images'], true);
            $row['images'] = json_decode($row['images'], true) ?: [];
        }

        return $row ?: null;
    }

    public function update($id, array $data): bool
    {
        $sql = "UPDATE news_feeds SET
            title = ?, category = ?, content = ?, author = ?, time = ?, images = ?, is_property = ?,
            property_name = ?, property_location = ?, property_type = ?, bedrooms = ?, bathrooms = ?, area = ?, price = ?, property_status = ?,
            availability = ?
            WHERE id = ?";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $data['title'],
            $data['category'],
            $data['content'],
            $data['author'],
            $data['time'],
            is_array($data['images']) ? json_encode($data['images']) : $data['images'],
            $data['is_property'] ?? false,
            $data['property_name'] ?? null,
            $data['property_location'] ?? null,
            $data['property_type'] ?? null,
            $data['bedrooms'] ?? null,
            $data['bathrooms'] ?? null,
            $data['area'] ?? null,
            $data['price'] ?? null,
            $data['property_status'] ?? null,
            $data['availability'] ?? null,
            $id
        ]);
    }

    public function delete($id): bool
    {
        $stmt = $this->db->prepare("DELETE FROM news_feeds WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
