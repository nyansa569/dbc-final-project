<?php
// namespace App\Models;

// class Document {
//     private $db;

//     public function __construct(\PDO $db) {
//         $this->db = $db;
//     }

//     public function create(array $data): bool {
//         $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);

//         $stmt = $this->db->prepare("
//             INSERT INTO documents (
//                 id, title, document_type, uploaded_by, date, 
//                 property_details, customer_details, agents
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//         ");

//         return $stmt->execute([
//             $id,
//             $data['title'],
//             $data['document_type'],
//             $data['uploaded_by'],
//             $data['date'],
//             json_encode($data['property_details']),
//             json_encode($data['customer_details']),
//             json_encode($data['agents'] ?? [])
//         ]);
//     }

//     public function all(): array {
//         $stmt = $this->db->query("SELECT * FROM documents ORDER BY date DESC");
//         $docs = $stmt->fetchAll();
//         return array_map([$this, 'decodeJsonFields'], $docs);
//     }

//     public function findById($id): ?array {
//         $stmt = $this->db->prepare("SELECT * FROM documents WHERE id = ?");
//         $stmt->execute([$id]);
//         $doc = $stmt->fetch();
//         return $doc ? $this->decodeJsonFields($doc) : null;
//     }

//     public function update($id, array $data): bool {
//         $stmt = $this->db->prepare("
//             UPDATE documents SET
//                 title = ?, document_type = ?, uploaded_by = ?, date = ?,
//                 property_details = ?, customer_details = ?, agents = ?
//             WHERE id = ?
//         ");

//         return $stmt->execute([
//             $data['title'],
//             $data['document_type'],
//             $data['uploaded_by'],
//             $data['date'],
//             json_encode($data['property_details']),
//             json_encode($data['customer_details']),
//             json_encode($data['agents'] ?? []),
//             $id
//         ]);
//     }

//     public function delete($id): bool {
//         $stmt = $this->db->prepare("DELETE FROM documents WHERE id = ?");
//         return $stmt->execute([$id]);
//     }

//     private function decodeJsonFields($doc) {
//         $doc['property_details'] = json_decode($doc['property_details'], true);
//         $doc['customer_details'] = json_decode($doc['customer_details'], true);
//         $doc['agents'] = json_decode($doc['agents'], true);
//         return $doc;
//     }
// }
namespace App\Models;

class Document
{
    private $db;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    public function all(): array
    {
        $stmt = $this->db->query("SELECT * FROM documents ORDER BY created_at DESC");
        return array_map([$this, 'decodeJsonFields'], $stmt->fetchAll());
    }

    public function findById($id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM documents WHERE id = ?");
        $stmt->execute([$id]);
        return ($doc = $stmt->fetch()) ? $this->decodeJsonFields($doc) : null;
    }

    public function create(array $data): bool
    {
        $stmt = $this->db->prepare("
    INSERT INTO documents (
        id, title, document_type, user_id, uploaded_by, date,
        property_details, customer_details, agents
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
");
        return $stmt->execute([
            $data['id'] ?? $this->generateId(),
            $data['title'],
            $data['document_type'],
            $data['user_id'],
            $data['uploaded_by'], 
            $data['date'],
            $data['property_details'],
            $data['customer_details'],
            $data['agents'] ?? null
        ]);

    }

    public function update($id, array $data): bool
    {
        $stmt = $this->db->prepare("
            UPDATE documents SET
                title = ?, document_type = ?, date = ?,
                property_details = ?, customer_details = ?, agents = ?
            WHERE id = ?
        ");

        return $stmt->execute([
            $data['title'],
            $data['document_type'],
            $data['date'],
            $data['property_details'],
            $data['customer_details'],
            $data['agents'] ?? null,
            $id
        ]);
    }

    public function delete($id): bool
    {
        $stmt = $this->db->prepare("DELETE FROM documents WHERE id = ?");
        return $stmt->execute([$id]);
    }

    private function decodeJsonFields(array $doc): array
    {
        $jsonFields = ['property_details', 'customer_details', 'agents'];
        foreach ($jsonFields as $field) {
            if (isset($doc[$field])) {
                $doc[$field] = json_decode($doc[$field], true);
            }
        }
        return $doc;
    }

    private function generateId(): string
    {
        return str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);
    }
}