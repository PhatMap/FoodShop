const db = require('../Config/mysql');


const getTodo = (req, res) => {
    const sql = "SELECT * FROM food";
    db.query(sql, (error, data) =>{
      if (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(data);
      }
    });
};

module.exports = {
    getTodo,
};