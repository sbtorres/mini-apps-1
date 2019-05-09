DROP DATABASE IF EXISTS checkout_app;

CREATE DATABASE checkout_app;

USE checkout_app;

CREATE TABLE account_info (id INT AUTO_INCREMENT PRIMARY KEY, 
                           name VARCHAR(255), 
                           email VARCHAR(255), 
                           password VARCHAR(255));

CREATE TABLE address_info (id INT AUTO_INCREMENT PRIMARY KEY, 
                           add_line_1 VARCHAR(255), 
                           add_line_2 VARCHAR(255), 
                           city VARCHAR(255),
                           state VARCHAR(255),
                           ship_zip INT, 
                           account_id INT,
                           FOREIGN KEY (account_id) REFERENCES account_info (id));

CREATE TABLE billing_info (id INT AUTO_INCREMENT PRIMARY KEY, 
                           credit_card_number BIGINT, 
                           exp_date DATE, 
                           bill_zip INT,
                           account_id INT, 
                           FOREIGN KEY (account_id) REFERENCES account_info (id));

