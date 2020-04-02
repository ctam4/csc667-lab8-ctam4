const express = require('express');
const app = express();
const port = 3001;

let counter = 0; // instance variable, bad, don't do this

app.get('/service1/*', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))