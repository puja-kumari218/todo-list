const express = require('express');
const router = express.Router();
const {getTodos} = require('../controller/todo');

router.get('/todos', getTodos);

module.exports = router;