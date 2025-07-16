-- -- Create offers table
-- CREATE TABLE offers (
--     id CHAR(10) PRIMARY KEY,
--     customer_name VARCHAR(100) NOT NULL,
--     customer_email VARCHAR(100) NOT NULL,
--     customer_phone VARCHAR(20) NOT NULL,
--     offer_bid DECIMAL(12, 2) NOT NULL,
--     property_name VARCHAR(150) NOT NULL,
--     property_description TEXT,
--     property_price DECIMAL(12, 2) NOT NULL,
--     date DATE NOT NULL,
--     status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending'
-- );

-- -- Insert default offers data
-- INSERT INTO offers (id, customer_name, customer_email, customer_phone, offer_bid, property_name, property_description, property_price, date, status) VALUES
-- ('0000000001', 'John Smith', 'john.smith@example.com', '+1 (555) 123-4567', 420000, 'Luxury Villa in Malibu', 'Stunning oceanfront villa with panoramic views', 4500000, '2023-05-15', 'pending'),
-- ('0000000002', 'Emma Johnson', 'emma.j@example.com', '+1 (555) 987-6543', 3200, 'Modern Downtown Apartment', 'Sleek modern apartment in the heart of downtown', 3500, '2023-05-18', 'pending'),
-- ('0000000003', 'Michael Brown', 'michael.b@example.com', '+1 (555) 456-7890', 525000, 'Cozy Suburban House', 'Charming family home with large backyard', 550000, '2023-05-20', 'rejected');

-- -- Create deals table
-- CREATE TABLE deals (
--     id CHAR(10) PRIMARY KEY,
--     customer_name VARCHAR(100) NOT NULL,
--     customer_email VARCHAR(100) NOT NULL,
--     customer_phone VARCHAR(20) NOT NULL,
--     transaction_type ENUM('sale', 'rent') NOT NULL,
--     final_price DECIMAL(12, 2) NOT NULL,
--     property_name VARCHAR(150) NOT NULL,
--     property_description TEXT,
--     date DATE NOT NULL,
--     status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending'
-- );

-- -- Insert default deals data
-- INSERT INTO deals (id, customer_name, customer_email, customer_phone, transaction_type, final_price, property_name, property_description, date, status) VALUES
-- ('0000000101', 'Sarah Williams', 'sarah.w@example.com', '+1 (555) 234-5678', 'sale', 4300000, 'Luxury Villa in Malibu', 'Stunning oceanfront villa with panoramic views', '2023-04-10', 'completed'),
-- ('0000000102', 'David Wilson', 'david.w@example.com', '+1 (555) 345-6789', 'rent', 3400, 'Modern Downtown Apartment', 'Sleek modern apartment in the heart of downtown', '2023-04-15', 'completed'),
-- ('0000000103', 'Lisa Taylor', 'lisa.t@example.com', '+1 (555) 456-7890', 'sale', 540000, 'Cozy Suburban House', 'Charming family home with large backyard', '2023-04-22', 'pending');


DROP TABLE IF EXISTS offers, deals;

CREATE TABLE offers_deals (
    id BIGINT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(50),
    offer_bid DECIMAL(12, 2) DEFAULT NULL,
    property_name VARCHAR(150),
    property_description TEXT,
    property_price DECIMAL(12, 2),
    transaction_type VARCHAR(50) DEFAULT NULL,
    final_price DECIMAL(12, 2) DEFAULT NULL,
    date DATE,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO offers_deals (
    id, customer_name, customer_email, customer_phone, offer_bid, 
    property_name, property_description, property_price, 
    transaction_type, final_price, date, status
) VALUES
(1, 'John Smith', 'john.smith@example.com', '+1 (555) 123-4567', 420000, 'Luxury Villa in Malibu', 'Stunning oceanfront villa with panoramic views', 4500000, NULL, NULL, '2023-05-15', 'pending'),
(2, 'Emma Johnson', 'emma.j@example.com', '+1 (555) 987-6543', 3200, 'Modern Downtown Apartment', 'Sleek modern apartment in the heart of downtown', 3500, NULL, NULL, '2023-05-18', 'pending'),
(3, 'Michael Brown', 'michael.b@example.com', '+1 (555) 456-7890', 525000, 'Cozy Suburban House', 'Charming family home with large backyard', 550000, NULL, NULL, '2023-05-20', 'rejected'),
(101, 'Sarah Williams', 'sarah.w@example.com', '+1 (555) 234-5678', NULL, 'Luxury Villa in Malibu', 'Stunning oceanfront villa with panoramic views', 4500000, 'sale', 4300000, '2023-04-10', 'completed'),
(102, 'David Wilson', 'david.w@example.com', '+1 (555) 345-6789', NULL, 'Modern Downtown Apartment', 'Sleek modern apartment in the heart of downtown', 3500, 'rent', 3400, '2023-04-15', 'completed'),
(103, 'Lisa Taylor', 'lisa.t@example.com', '+1 (555) 456-7890', NULL, 'Cozy Suburban House', 'Charming family home with large backyard', 550000, 'sale', 540000, '2023-04-22', 'pending');
