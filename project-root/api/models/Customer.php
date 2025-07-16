<?php
// namespace App\Models;

// class Customer {
//     private $db;

//     public function __construct(\PDO $db) {
//         $this->db = $db;
//     }

//     public function create(array $data): bool {
//         $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);

//         $sql = "INSERT INTO customers (
//             id, customer_name, customer_email, customer_phone, offer_bid, 
//             property_name, property_description, property_price, 
//             transaction_type, final_price, date, status
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

//         $stmt = $this->db->prepare($sql);
//         return $stmt->execute([
//             $id,
//             $data['customer_name'],
//             $data['customer_email'],
//             $data['customer_phone'],
//             $data['offer_bid'] ?? null,
//             $data['property_name'],
//             $data['property_description'],
//             $data['property_price'],
//             $data['transaction_type'] ?? null,
//             $data['final_price'] ?? null,
//             $data['date'],
//             $data['status'] ?? 'pending'
//         ]);
//     }

//     public function all(): array {
//         $stmt = $this->db->query("SELECT * FROM customers ORDER BY created_at DESC");
//         return $stmt->fetchAll();
//     }

//     public function findById($id): ?array {
//         $stmt = $this->db->prepare("SELECT * FROM customers WHERE id = ?");
//         $stmt->execute([$id]);
//         return $stmt->fetch() ?: null;
//     }

//     public function update($id, array $data): bool {
//         $sql = "UPDATE customers SET
//             customer_name = ?, customer_email = ?, customer_phone = ?, offer_bid = ?, 
//             property_name = ?, property_description = ?, property_price = ?, 
//             transaction_type = ?, final_price = ?, date = ?, status = ?
//             WHERE id = ?";

//         $stmt = $this->db->prepare($sql);
//         return $stmt->execute([
//             $data['customer_name'],
//             $data['customer_email'],
//             $data['customer_phone'],
//             $data['offer_bid'] ?? null,
//             $data['property_name'],
//             $data['property_description'],
//             $data['property_price'],
//             $data['transaction_type'] ?? null,
//             $data['final_price'] ?? null,
//             $data['date'],
//             $data['status'],
//             $id
//         ]);
//     }

//     public function delete($id): bool {
//         $stmt = $this->db->prepare("DELETE FROM customers WHERE id = ?");
//         return $stmt->execute([$id]);
//     }
// }

namespace App\Models;

class OfferOrDeal
{
    private $db;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    public function create(array $data): bool
    {
        $id = str_pad(random_int(1, 9999999999), 10, '0', STR_PAD_LEFT);

        $sql = "INSERT INTO offers_deals (
            id, customer_name, customer_email, customer_phone, offer_bid, 
            property_name, property_description, property_price, 
            transaction_type, final_price, date, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $id,
            $data['customer_name'],
            $data['customer_email'],
            $data['customer_phone'],
            $data['offer_bid'] ?? null,
            $data['property_name'],
            $data['property_description'],
            $data['property_price'],
            $data['transaction_type'] ?? null,
            $data['final_price'] ?? null,
            $data['date'],
            $data['status'] ?? 'pending'
        ]);
    }

    public function all(): array
    {
        $stmt = $this->db->query("SELECT * FROM offers_deals ORDER BY date DESC");
        // return $stmt->fetchAll();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function findById($id): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM offers_deals WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    public function update($id, array $data): bool
    {
        $sql = "UPDATE offers_deals SET
            customer_name = ?, customer_email = ?, customer_phone = ?, offer_bid = ?, 
            property_name = ?, property_description = ?, property_price = ?, 
            transaction_type = ?, final_price = ?, date = ?, status = ?
            WHERE id = ?";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $data['customer_name'],
            $data['customer_email'],
            $data['customer_phone'],
            $data['offer_bid'] ?? null,
            $data['property_name'],
            $data['property_description'],
            $data['property_price'],
            $data['transaction_type'] ?? null,
            $data['final_price'] ?? null,
            $data['date'],
            $data['status'],
            $id
        ]);
    }

    public function delete($id): bool
    {
        $stmt = $this->db->prepare("DELETE FROM offers_deals WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
