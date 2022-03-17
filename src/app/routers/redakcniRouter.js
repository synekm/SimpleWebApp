const path = require('path');
const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'redakcniController'));

router.get('/', controller.main);
router.get('/nahrani', controller.jePrihlasen, controller.nahrani);
router.post('/nahrat', controller.nahrat);
router.post('/odhlaseni', controller.odhlasit)
router.get('/porovnat', controller.porovnat);
router.post('/loginInfo', controller.postLoginInfo);

module.exports = router;