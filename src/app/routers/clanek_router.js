const path = require('path');

const express = require('express');
const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'clanek_controller'));

router.get('/', controller.uvod);
router.get('/detail/:id', controller.detail_clanek);

module.exports = router;