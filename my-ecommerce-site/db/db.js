// This line imports the process module from Node.js. The process module provides information and control over the current Node.js process.
import process from "process";
// This line imports the mysql module from the mysql2 package. The mysql module provides a MySQL client for Node.js.
import mysql from "mysql2";
// This line imports the dotenv module from the dotenv package. The dotenv module loads environment variables from a .env file into process.env.
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// This line creates a connection to the MySQL database using the environment variables loaded from the .env file.
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

// This block of code attempts to establish a connection to the MySQL database using the connect method of the connection object.
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }

  console.log("Connected to the MySQL database!");
});

// This line exports the connection object to make it available for use in other files.
export default connection;
