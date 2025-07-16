--! -- Create the database if it doesn't exist
-- IF NOT EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = 'estate_project_db')
-- CREATE DATABASE estate_project_db;
-- GO

-- USE estate_project_db;
-- GO

-- -- Create users table
-- CREATE TABLE users (
--     id CHAR(10) PRIMARY KEY DEFAULT RIGHT('0000000000' + CAST(ABS(CHECKSUM(NEWID())) % 10000000000 AS VARCHAR(10)), 10),
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     role VARCHAR(20) NOT NULL CHECK (role IN ('agent', 'admin', 'broker', 'manager')) DEFAULT 'agent',
--     phone VARCHAR(20) NOT NULL,
--     license_number VARCHAR(50) NOT NULL,
--     profile_image VARCHAR(255),
--     bio TEXT,
--     specialties VARCHAR(255),
--     years_experience INT DEFAULT 0,
--     is_verified BIT DEFAULT 1,
--     verification_token VARCHAR(100),
--     last_login DATETIME,
--     status VARCHAR(20) NOT NULL CHECK (status IN ('active', 'inactive', 'suspended')) DEFAULT 'active',
--     created_at DATETIME DEFAULT GETDATE(),
--     updated_at DATETIME DEFAULT GETDATE()
-- );
-- GO

-- -- Create indexes for users table
-- CREATE INDEX idx_email ON users(email);
-- CREATE INDEX idx_status ON users(status);
-- GO

-- -- Create password_resets table
-- CREATE TABLE password_resets (
--     email VARCHAR(100) NOT NULL PRIMARY KEY,
--     token VARCHAR(6) NOT NULL,
--     expires_at DATETIME NOT NULL,
--     FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
-- );
-- GO

-- -- Now insert the default data
-- INSERT INTO users (
--     id, 
--     name, 
--     email, 
--     password, 
--     role, 
--     phone, 
--     license_number, 
--     is_verified,
--     status,
--     specialties,
--     years_experience,
--     bio
-- ) VALUES (
--     '0000000001', 
--     'System Admin', 
--     'admin@estate.com', 
--     '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- hashed "password"
--     'admin', 
--     '1234567890', 
--     'ADMIN001',
--     1, -- TRUE in MSSQL
--     'active',
--     'Residential,Commercial,Luxury',
--     10,
--     'Default system administrator account with full privileges'
-- );
-- GO

-- -- Insert sample agent
-- INSERT INTO users (
--     name,
--     email,
--     password,
--     role,
--     phone,
--     license_number,
--     profile_image,
--     specialties,
--     years_experience,
--     bio
-- ) VALUES (
--     'John Doe',
--     'john.doe@estate.com',
--     '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
--     'agent',
--     '15551234567',
--     'REA123456',
--     'https://example.com/profiles/john.jpg',
--     'Residential,First-Time Buyers',
--     5,
--     'Specializing in residential properties and helping first-time buyers'
-- );
-- GO

-- -- Insert sample broker
-- INSERT INTO users (
--     name,
--     email,
--     password,
--     role,
--     phone,
--     license_number,
--     years_experience,
--     status
-- ) VALUES (
--     'Jane Smith',
--     'jane.smith@estate.com',
--     '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
--     'broker',
--     '15559876543',
--     'BROKER001',
--     8,
--     'active'
-- );
-- GO

-- -- Insert sample password reset token (valid for 1 hour)
-- INSERT INTO password_resets (
--     email,
--     token,
--     expires_at
-- ) VALUES (
--     'john.doe@estate.com',
--     '123456',
--     DATEADD(HOUR, 1, GETDATE())
-- );
-- GO

-- -- Verify the data
-- SELECT id, name, email, role, status FROM users;
-- GO

-- SELECT email, token, expires_at FROM password_resets;
-- GO



--! Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS estate_project_db;
USE estate_project_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id CHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('agent', 'admin', 'broker', 'manager') NOT NULL DEFAULT 'agent',
    phone VARCHAR(20) NOT NULL,
    license_number VARCHAR(50) NOT NULL,
    profile_image VARCHAR(255),
    bio TEXT,
    specialties VARCHAR(255),
    years_experience INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT 1,
    verification_token VARCHAR(100),
    last_login DATETIME,
    status ENUM('active', 'inactive', 'suspended') NOT NULL DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create indexes for users table
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_status ON users(status);

-- Create password_resets table
CREATE TABLE IF NOT EXISTS password_resets (
    email VARCHAR(100) NOT NULL,
    token VARCHAR(6) NOT NULL,
    expires_at DATETIME NOT NULL,
    PRIMARY KEY (email),
    FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
);

-- Insert default admin
INSERT INTO users (
    id, 
    name, 
    email, 
    password, 
    role, 
    phone, 
    license_number, 
    is_verified,
    status,
    specialties,
    years_experience,
    bio
) VALUES (
    '0000000001', 
    'System Admin', 
    'admin@estate.com', 
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'admin', 
    '1234567890', 
    'ADMIN001',
    TRUE,
    'active',
    'Residential,Commercial,Luxury',
    10,
    'Default system administrator account with full privileges'
);

-- Insert sample agent
INSERT INTO users (
    id,
    name,
    email,
    password,
    role,
    phone,
    license_number,
    profile_image,
    specialties,
    years_experience,
    bio
) VALUES (
    '0000000002',
    'John Doe',
    'john.doe@estate.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'agent',
    '15551234567',
    'REA123456',
    'https://example.com/profiles/john.jpg',
    'Residential,First-Time Buyers',
    5,
    'Specializing in residential properties and helping first-time buyers'
);

-- Insert sample broker
INSERT INTO users (
    id,
    name,
    email,
    password,
    role,
    phone,
    license_number,
    years_experience,
    status
) VALUES (
    '0000000003',
    'Jane Smith',
    'jane.smith@estate.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'broker',
    '15559876543',
    'BROKER001',
    8,
    'active'
);

-- Insert sample password reset token (valid for 1 hour)
INSERT INTO password_resets (
    email,
    token,
    expires_at
) VALUES (
    'john.doe@estate.com',
    '123456',
    DATE_ADD(NOW(), INTERVAL 1 HOUR)
);

-- -- Verify the data
-- SELECT id, name, email, role, status FROM users;
-- SELECT email, token, expires_at FROM password_resets;
