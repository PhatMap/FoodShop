const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})