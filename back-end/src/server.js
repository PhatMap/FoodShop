const express = require('express')
const configViewEngine = require('./config/viewEngine')
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// configViewEngine(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})