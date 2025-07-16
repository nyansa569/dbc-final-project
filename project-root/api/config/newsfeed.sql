CREATE TABLE news_feeds (
    id BIGINT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    content TEXT,
    author VARCHAR(100),
    time DATETIME,
    images JSON,
    is_property BOOLEAN DEFAULT false,

    -- Optional propertyDetails (only filled if is_property = true)
    property_name VARCHAR(255),
    property_location VARCHAR(255),
    property_type VARCHAR(50),
    bedrooms INT,
    bathrooms INT,
    area INT,
    price DECIMAL(12, 2),
    property_status VARCHAR(50),
    user_id VARCHAR(100),
    availability VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO news_feeds (
    id, title, category, content, author, time, images, is_property,
    property_name, property_location, property_type, bedrooms, bathrooms, area, price, property_status,
    availability
) VALUES
(
    1,
    'New Luxury Villa Listing in Malibu',
    'Property Post',
    'We are excited to announce a stunning new luxury villa listing in Malibu with ocean views and premium amenities.',
    'John Doe',
    '2023-05-10 14:30:00',
    '["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"]',
    true,
    'Luxury Villa in Malibu',
    'Malibu, California',
    'Villa',
    5,
    4,
    3200,
    4500000,
    'for sale',
    'Available'
),
(
    2,
    'Summer Special Offer from Coca-Cola',
    'Ad',
    'Cool off this summer with Coca-Cola! Get 20% off on all cases purchased through our partners.',
    'Marketing Team',
    '2023-05-15 10:15:00',
    '["https://images.unsplash.com/photo-1554866585-cd94860890b7"]',
    false,
    NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
    NULL
),
(
    3,
    'Market Trends: Q2 2023 Real Estate Report',
    'News',
    'The latest market trends show a 5% increase in property values across coastal regions. Read our full analysis.',
    'Analytics Team',
    '2023-05-18 16:45:00',
    '["https://images.unsplash.com/photo-1450101499163-c8848c66ca85"]',
    false,
    NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
    NULL
);
