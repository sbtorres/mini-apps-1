const express = require('express');
const app = express();
const PORT = 2500;

app.use(express.static(path.join(__dirname, '..', 'src', 'public')));

app.listen(PORT, () => {
  console.log(`Server is now listening on port: ${PORT}!`);
})

