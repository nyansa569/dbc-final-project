ALTER TABLE properties 
MODIFY COLUMN status ENUM(
  'for sale', 
  'sold out', 
  'rented out', 
  'for rent', 
  'ongoing construction'
) NOT NULL DEFAULT 'for sale';
