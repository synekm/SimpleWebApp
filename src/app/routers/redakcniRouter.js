const path = require('path');
const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'redakcniController'));

router.get('/', controller.main);

module.exports = router;