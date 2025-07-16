CREATE TABLE documents (
    id VARCHAR(20) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    document_type VARCHAR(100) NOT NULL,
    uploaded_by VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    property_details JSON NOT NULL,
    customer_details JSON NOT NULL,
    agents JSON,
    user_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Default data insert
INSERT INTO documents (
    id, title, document_type, uploaded_by, date, 
    property_details, customer_details, agents
) VALUES (
    '0000000001',
    'Purchase Agreement - Villa Malibu',
    'Agreement',
    'John Doe',
    '2023-05-10',
    '{
        "name": "Luxury Villa in Malibu",
        "location": "Malibu, California",
        "type": "Villa",
        "price": 4500000
    }',
    '{
        "name": "Sarah Williams",
        "email": "sarah.w@example.com",
        "phone": "+1 (555) 234-5678"
    }',
    '[
        {"name": "Michael Brown", "contact": "+1 (555) 345-6789"},
        {"name": "Lisa Taylor", "contact": "+1 (555) 456-7890"}
    ]'
);
