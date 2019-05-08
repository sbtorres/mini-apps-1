const mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'scott',
  database: 'checkout_app'
});

connection.connect();

