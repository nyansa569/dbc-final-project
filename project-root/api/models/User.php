<?php
namespace App\Models;

class User
{
    private $db;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    public function create(array $data): bool
    {
        // Generate unique 10-digit ID
        do {
            $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);
            $exists = $this->findById($id);
        } while ($exists);

        $sql = "INSERT INTO users (
            id, name, email, password, phone, license_number, role,
            profile_image, bio, specialties, years_experience
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $id,
            $data['name'],
            $data['email'],
            password_hash($data['password'], PASSWORD_BCRYPT),
            $data['phone'],
            $data['license_number'],
            $data['role'] ?? 'agent',
            $data['profile_image'] ?? null,
            $data['bio'] ?? null,
            $data['specialties'] ?? null,
            $data['years_experience'] ?? 0
        ]);
    }
    // Get all users (with pagination)
    public function all(int $page = 1, int $perPage = 10): array
    {
        $offset = ($page - 1) * $perPage;
        $stmt = $this->db->prepare("
            SELECT * 
            FROM users 
            ORDER BY created_at DESC 
            LIMIT :limit OFFSET :offset
        ");
        $stmt->bindValue(':limit', $perPage, \PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function findByEmail(string $email): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        return $stmt->fetch(\PDO::FETCH_ASSOC) ?: null;
    }

    public function findById(string $id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(\PDO::FETCH_ASSOC) ?: null;
    }

    public function updateLastLogin(string $userId): bool
    {
        $stmt = $this->db->prepare("UPDATE users SET last_login = NOW() WHERE id = ?");
        return $stmt->execute([$userId]);
    }
    // Update user
    public function update(string $id, array $data): bool
    {
        // Don't allow updating ID or password here (use separate methods)
        unset($data['id'], $data['password']);

        $fields = [];
        $values = [];

        foreach ($data as $field => $value) {
            $fields[] = "$field = ?";
            $values[] = $value;
        }

        $values[] = $id; // For WHERE clause

        $sql = "UPDATE users SET " . implode(', ', $fields) . " WHERE id = ?";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute($values);
    }
    // Delete user (soft delete by setting status to inactive)
    public function delete(string $id): bool
    {
        $stmt = $this->db->prepare("
            UPDATE users SET status = 'inactive' 
            WHERE id = ?
        ");
        return $stmt->execute([$id]);
    } // Change password

    public function changePassword(string $id, string $newPassword): bool
    {
        $stmt = $this->db->prepare("
            UPDATE users SET password = ? 
            WHERE id = ?
        ");
        return $stmt->execute([
            password_hash($newPassword, PASSWORD_BCRYPT),
            $id
        ]);
    }

    // Count total users
    public function count(): int
    {
        $stmt = $this->db->query("SELECT COUNT(*) FROM users");
        return (int) $stmt->fetchColumn();
    }


}
