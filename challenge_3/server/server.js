const express = require('express');
const path = require('path');
const db = require('./db/index.js');
const bodyParser = require('body-parser');
const app = express();
const PORT = 2500;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser());

app.post('/makePurchase', (req, res) => {
  db.createAccount(req.body, (err, result) => {
    if (err) {
      res.status(500);
      res.send('Failed to post account to database');
    } else {
      res.status(201);
      res.send(result);
    }
  }); 
})

app.listen(PORT, () => {
  console.log(`Server is now listening on port: ${PORT}!`);
})

