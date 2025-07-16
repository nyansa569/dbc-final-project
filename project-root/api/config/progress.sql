-- Main Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id BIGINT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    overall_status VARCHAR(100),
    property_name VARCHAR(255),
    property_description TEXT,
    property_images TEXT
);

-- Related Progress Details Table
CREATE TABLE IF NOT EXISTS project_progress (
    id BIGINT PRIMARY KEY,
    project_id BIGINT,
    title VARCHAR(255),
    description TEXT,
    images TEXT,
    progress_status VARCHAR(100),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);


INSERT INTO projects (
    id, title, description, overall_status, property_name, property_description, property_images
) VALUES (
    1,
    'Luxury Waterfront Villa',
    'Exclusive waterfront property with panoramic views',
    'In Progress',
    'Sunset Villas',
    '5-bedroom, 4-bath luxury villa with infinity pool',
    '["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"]'
);

INSERT INTO projects (
    id, title, description, overall_status, property_name, property_description, property_images
) VALUES (
    2,
    'Downtown Condo Tower',
    'High-rise luxury condominium in the city center',
    'Planning',
    'Urban Heights',
    '40-story tower with amenities and city views',
    '["https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"]'
);


INSERT INTO project_progress (
    id, project_id, title, description, images, progress_status
) VALUES (
    1,
    1,
    'Foundation Work',
    'Concrete pouring and foundation setting',
    '["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"]',
    'Completed'
);

INSERT INTO project_progress (
    id, project_id, title, description, images, progress_status
) VALUES (
    2,
    1,
    'Framing',
    'Structural framing and roof installation',
    '[]',
    'In Progress'
);
