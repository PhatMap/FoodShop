const express = require('express');
const cors = require('cors');
require('dotenv').config();
const todos = require('./Todos/todo-routes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', todos)

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Example app listening on port', port)
})