-- This line selects the ecommerce database to be used for subsequent SQL statements. It ensures that all operations are performed within the context of the ecommerce database.
USE ecommerce;

-- This statement creates a table named products with columns for id, name, description, price, and image_url. The id column is set as the primary key and will auto-increment with each new record added to the table.
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT
);

-- This line selects all columns and rows from the products table. It retrieves and displays all the records in the products table.
SELECT * FROM products;
