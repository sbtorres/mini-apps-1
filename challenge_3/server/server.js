const express = require('express');
const app = express();
const PORT = 2500;

app.listen(PORT, () => {
  console.log(`Server is now listening on port: ${PORT}!`);
})

