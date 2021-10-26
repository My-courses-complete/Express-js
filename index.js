const express = require('express');

const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/products', (req, res) => {
  res.json({ hello: 'Hello world'})
})

app.listen(port, () =>{
  console.log('listening in port ' + port);
})