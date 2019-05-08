var express = require('express');
var app = express();

app.get('/', (req, res) => {
  var options = {
    root: __dirname + '/client/',
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})

app.listen(3700, () => {
  console.log('Now listening on port 3700');
});

