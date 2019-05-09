const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('./client/dist'));

app.listen(PORT, () => {console.log(`Now listening on port ${PORT}!`)});

