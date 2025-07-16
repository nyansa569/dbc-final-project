ALTER TABLE users
MODIFY COLUMN role ENUM('admin', 'owner', 'buyer', 'seller', 'agent') NOT NULL DEFAULT 'buyer';

ALTER TABLE users
MODIFY COLUMN license_number VARCHAR(50) NULL;

ALTER TABLE users
ADD COLUMN hasPermitToConstruct BOOLEAN DEFAULT FALSE,
ADD COLUMN hasPermitToSell BOOLEAN DEFAULT FALSE;

