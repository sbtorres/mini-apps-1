const mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'scott',
  database: 'checkout_app'
});

var createAccount = (reqBody, callback) => {
  connection.query(`INSERT INTO account_info (name, email, password) 
                    VALUES ("${reqBody.accountInfo.name}", "${reqBody.accountInfo.email}", "${reqBody.accountInfo.password}");`, (err, results) => {
                      if (err) {
                        callback(err);
                        return;
                      } else {
                        console.log(reqBody);
                        connection.query(`INSERT INTO address_info (add_line_1, add_line_2, city, state, ship_zip, account_id) 
                        VALUES ("${reqBody.addressInfo.addLine1}", "${reqBody.addressInfo.addLine2}", "${reqBody.addressInfo.city}", "${reqBody.addressInfo.state}", ${reqBody.addressInfo.shipZip}, 
                        (SELECT id FROM account_info WHERE name = "${reqBody.accountInfo.name}"));`, (err, results) => {
                          if (err) {
                            callback(err);
                            return;
                          } else {
                            connection.query(`INSERT INTO billing_info (credit_card_number, exp_date, bill_zip, account_id)
                            VALUES ("${reqBody.billingInfo.creditCardNum}", "${reqBody.billingInfo.expDate}", ${reqBody.billingInfo.billingZip}, 
                            (SELECT id FROM account_info WHERE name = "${reqBody.accountInfo.name}"));`, (err, results) => {
                              if (err) {
                                callback (err);
                              } else {
                                callback(null, `Successfully posted account information for ${reqBody.accountInfo.name}`);
                              }
                            })
                          }
                        })
                      }
                    })




  

}

connection.connect();

module.exports = { createAccount };