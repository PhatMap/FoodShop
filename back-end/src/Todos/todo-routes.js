const express = require('express');
const router = express.Router();
const {getTodo}  = require('./todo-controllers');

router.post('/', getTodo);

module.exports = router;