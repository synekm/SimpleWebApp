const path = require('path');
const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'redakcni_controller'));


router.get('/login', controller.login_form);
router.post('/loginInfo', controller.post_login_info,controller.porovnat);
router.get('/nahrani_clanku', controller.jePrihlasen, controller.nahrani_form);
router.get('/prehled_clanku', controller.jePrihlasen, controller.prehled_clanku);
router.get('/upraveni_clanku/:id', controller.jePrihlasen, controller.uprava_clanku);

router.post('/nahrat', controller.jePrihlasen, controller.nahrat);
router.post('/upravit/:id', controller.jePrihlasen, controller.upravit);
router.get('/smazat/:id', controller.jePrihlasen, controller.smazat);
router.get('/odhlaseni', controller.jePrihlasen, controller.odhlasit)
router.get('/porovnat', controller.jePrihlasen, controller.porovnat);

module.exports = router;