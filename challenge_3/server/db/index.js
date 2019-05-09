const mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'scott',
  database: 'checkout_app'
});

var createAccount = (reqBody, callback) => {
  console.log(reqBody);
  callback(null, 'Posted');
}

connection.connect();

module.exports = { createAccount };