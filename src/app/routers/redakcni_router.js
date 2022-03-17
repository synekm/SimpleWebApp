const path = require('path');
const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'redakcni_controller'));


router.get('/login', controller.login_form);
router.post('/loginInfo', controller.post_login_info,controller.porovnat);
router.get('/nahrani', controller.jePrihlasen, controller.nahrani);
router.post('/nahrat', controller.jePrihlasen, controller.nahrat);
router.get('/odhlaseni', controller.jePrihlasen, controller.odhlasit)
router.get('/porovnat', controller.jePrihlasen, controller.porovnat);

module.exports = router;