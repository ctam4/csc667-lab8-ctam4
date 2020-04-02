const express = require('express');
const app = express();
const port = 3002;

// gateway proxies this /service1/
app.get('/service1/*', (req, res) => {
  res.send('Hello world');
});

// not visible to gateway
// localhost:3002/internal/api
app.get('/internal/api', (req, res) => {
  setTimeout(() => {
    res.send({
      hello: 'home', // pretend this is expensive
    });
  }, 2000); // simulate taking a long time
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
