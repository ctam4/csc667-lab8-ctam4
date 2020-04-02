const express = require('express');
const axios = require('axios');
const redis = require('redis');
const app = express();
const port = 3001;

let counter = 0; // instance variable, bad, don't do this
const client = redis.createClient();

app.get('/service1/*', (req, res) => {
  client.get('myCachedValue', (err, cachedValue) => {
    if (err) {
      console.log(err);
      res.send('error');
    }
    console.log(cachedValue);
    if (cachedValue !== null) {
      // cache hit
      console.log('Cache hit, item exists in redis!');
      return res.send(cachedValue); // redis knows value, return it
    }
    else {
      // cache miss
      console.log('Cache miss, value not in redis');
      axios.get('http://0.0.0.0:3002/internal/api') // ;ag
           .then((service1Response) => {
             console.log(service1Response.data);
             const value = service1Response.data;
             client.set('myCachedValue', JSON.stringify(value));
             return res.send(value);
           })
           .catch(console.log);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
