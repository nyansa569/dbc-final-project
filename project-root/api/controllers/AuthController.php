<?php
namespace App\Controllers;

use App\Models\User;

class AuthController
{
    private $db;
    private $userModel;

    public function __construct(\PDO $db)
    {
        $this->db = $db;
        $this->userModel = new User($db);
        session_start();
    }


    public function getUserById($id)
    {
        $user = $this->userModel->findById($id);
        if ($user) {
            unset($user['password']); // Hide password
            return $user;
        }
        return ['error' => 'User not found'];
    }


    // User Registration
    public function register($data)
    {
        // Validate required fields
        $required = ['name', 'email', 'password', 'phone', 'license_number'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                return ['error' => "$field is required"];
            }
        }

        // Check if email exists
        if ($this->userModel->findByEmail($data['email'])) {
            return ['error' => 'Email already registered'];
        }

        // Create user
        if ($this->userModel->create($data)) {
            return ['success' => 'Registration successful'];
        }

        return ['error' => 'Registration failed'];
    }

    // User Login
    public function login($data)
    {
        if (empty($data['email']) || empty($data['password'])) {
            return ['error' => 'Email and password are required'];
        }

        $user = $this->userModel->findByEmail($data['email']);

        if (!$user || !password_verify($data['password'], $user['password'])) {
            return ['error' => 'Invalid credentials'];
        }

        if ($user['status'] !== 'active') {
            return ['error' => 'Account is not active'];
        }

        // Set session variables
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_email'] = $user['email'];
        $_SESSION['user_role'] = $user['role'];
        $_SESSION['logged_in'] = true;

        return [
            'success' => 'Login successful',
            'user' => [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => $user['role'],
                'profile_image' => $user['profile_image'],
            ]
        ];
    }

    // Password Reset
    public function forgotPassword($email)
    {
        if (empty($email)) {
            return ['error' => 'Email is required'];
        }

        $user = $this->userModel->findByEmail($email);
        if (!$user) {
            return ['error' => 'Email not found'];
        }

        // Generate simple reset token (6-digit code)
        $resetToken = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $expires = date('Y-m-d H:i:s', strtotime('+1 hour'));

        // Store token in database (you'll need to add a password_resets table)
        $stmt = $this->db->prepare("
            INSERT INTO password_resets (email, token, expires_at) 
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE token = ?, expires_at = ?
        ");
        $stmt->execute([$email, $resetToken, $expires, $resetToken, $expires]);

        // In a real app, you would send this token via email
        return ['success' => 'Reset code generated', 'token' => $resetToken];
    }

    // Logout
    public function logout()
    {
        session_unset();
        session_destroy();
        return ['success' => 'Logged out successfully'];
    }

    // Check if user is logged in
    public function checkAuth()
    {
        if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
            return [
                'authenticated' => true,
                'user' => [
                    'id' => $_SESSION['user_id'],
                    'email' => $_SESSION['user_email'],
                    'role' => $_SESSION['user_role'],
                    'name' => $_SESSION['name'],
                    'profile_image' => $_SESSION['profile_image'],
                ]
            ];
        }
        return ['authenticated' => false];
    }

    // Get all users (paginated)
    public function index()
    {
        $page = $_GET['page'] ?? 1;
        $perPage = $_GET['per_page'] ?? 10;

        $users = $this->userModel->all((int) $page, (int) $perPage);
        $total = $this->userModel->count();

        return [
            'data' => $users,
            'meta' => [
                'total' => $total,
                'page' => (int) $page,
                'per_page' => (int) $perPage,
                'last_page' => ceil($total / $perPage)
            ]
        ];
    }
    // Get single user
    public function show($id)
    {
        $user = $this->userModel->findById($id);
        if (!$user) {
            return ['error' => 'User not found'];
        }

        // Remove sensitive data
        unset($user['password']);
        return $user;
    }

    // Update user
    // public function update($id)
    // {
    //     error_log('PUT: ' . print_r($_POST, true));
    //     $data = json_decode(file_get_contents('php://input'), true) ?? [];

    //     // Don't allow changing email or password via this endpoint
    //     unset($data['email'], $data['password']);

    //     if ($this->userModel->update($id, $data)) {
    //         return ['success' => 'User updated successfully'];
    //     }

    //     return ['error' => 'Failed to update user'];
    // }
    public function update($id)
    {
        $rawData = file_get_contents('php://input');
        error_log("Raw update data: " . $rawData);
        $data = json_decode($rawData, true) ?? [];

        // Ensure boolean fields are properly formatted
        $data['hasPermitToConstruct'] = isset($data['hasPermitToConstruct'])
            ? (int) $data['hasPermitToConstruct']
            : 0;
        $data['hasPermitToSell'] = isset($data['hasPermitToSell'])
            ? (int) $data['hasPermitToSell']
            : 0;

        // Debug the processed data
        error_log("Processed update data:");
        error_log(print_r($data, true));

        // Don't allow changing email or password via this endpoint
        unset($data['email'], $data['password']);

        if ($this->userModel->update($id, $data)) {
            return ['success' => 'User updated successfully'];
        }

        return ['error' => 'Failed to update user'];
    }

    // Delete user (soft delete)
    public function destroy($id)
    {
        if ($this->userModel->delete($id)) {
            return ['success' => 'User deactivated successfully'];
        }
        return ['error' => 'Failed to deactivate user'];
    }

    // Change password
    public function changePassword($id)
    {
        $data = json_decode(file_get_contents('php://input'), true) ?? [];

        if (empty($data['new_password'])) {
            return ['error' => 'New password is required'];
        }

        if ($this->userModel->changePassword($id, $data['new_password'])) {
            return ['success' => 'Password changed successfully'];
        }

        return ['error' => 'Failed to change password'];
    }

}