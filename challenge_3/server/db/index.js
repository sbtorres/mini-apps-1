const mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'scott',
  database: 'checkout_app'
});

var createAccount = (reqBody, callback) => {
  connection.query(`INSERT INTO account_info (name, email, password) VALUES ("${reqBody.name}", "${reqBody.email}", "${reqBody.password}");`);
  callback(null, `Successfully posted account information for ${reqBody.name}`);
}

connection.connect();

module.exports = { createAccount };