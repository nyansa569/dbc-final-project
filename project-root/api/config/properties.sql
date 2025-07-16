
-- Create the properties table (if not already created)
CREATE TABLE IF NOT EXISTS properties (
    id CHAR(10) PRIMARY KEY,
    image VARCHAR(255),
    name VARCHAR(150) NOT NULL,
    location VARCHAR(150) NOT NULL,
    type VARCHAR(50) NOT NULL,
    bedrooms INT DEFAULT 0,
    bathrooms INT DEFAULT 0,
    area INT DEFAULT 0,
    description TEXT,
    price DECIMAL(12,2) NOT NULL,
    status ENUM('for sale', 'for rent') NOT NULL,
    user_id VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample properties with random 10-digit IDs
INSERT INTO properties (
    id, image, name, location, type,
    bedrooms, bathrooms, area, description, price, status
) VALUES
(
    LPAD(FLOOR(RAND() * 10000000000), 10, '0'),
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    'Luxury Villa in Malibu',
    'Malibu, California',
    'Villa',
    5,
    4,
    3200,
    'Stunning oceanfront villa with panoramic views, private beach access, and luxury amenities.',
    4500000.00,
    'for sale'
),
(
    LPAD(FLOOR(RAND() * 10000000000), 10, '0'),
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'Modern Downtown Apartment',
    'New York, NY',
    'Apartment',
    2,
    2,
    1200,
    'Sleek modern apartment in the heart of downtown with amazing city views.',
    3200.00,
    'for rent'
),
(
    LPAD(FLOOR(RAND() * 10000000000), 10, '0'),
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    'Cozy Suburban House',
    'Austin, Texas',
    'House',
    3,
    2,
    1800,
    'Charming family home with large backyard and modern interior finishes.',
    550000.00,
    'for sale'
);



ALTER TABLE properties
ADD COLUMN isVerified BOOLEAN DEFAULT FALSE;


ALTER TABLE properties 
MODIFY COLUMN status ENUM(
  'for sale', 
  'sold out', 
  'rented out', 
  'for rent', 
  'ongoing construction'
) NOT NULL DEFAULT 'for sale';
