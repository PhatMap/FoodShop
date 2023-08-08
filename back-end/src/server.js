const express = require('express');
const cors = require('cors');
const mysql = require('mysql2')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "phatmap234",
  database: "catchup"
})

db.connect(function(err) {

  if (err) {
      return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.post('/', (req, res) => {
  const sql = "SELECT * FROM food";
  db.query(sql, (error, data) =>{
    if (error) {
      console.error('Error querying the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(data);
    }
  })
  
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Example app listening on port', port)
})