const path = require('path');
const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'redakcniController'));

router.get('/', controller.main);
router.get('/nahrani', controller.nahrani);
router.post('/nahrat', controller.nahrat);

/*
router.post('/loginInfo', controller.postLoginInfo);
router.post('/logout', controller.logout)

router.get('/', controller.isLogged, controller.admin);
*/
module.exports = router;


/*
router.get('/upload', controller.verify, controller.upload);
router.get('/getProjectNames', controller.verify, controller.getProjectNames);
router.get('/edit/:id', controller.verify, controller.getProjectData)
router.get('/edit', controller.verify, controller.adminEdit);
router.get('/getProjectTitles', controller.verify, controller.getProjectTitles);
router.get('/compare', controller.compareAdmin);

router.post('/sendImg', controller.verify, controller.uploadImg, controller.uploadProject);
router.post('/editProject', controller.verify, controller.editProject);
router.post('/deleteProject', controller.verify, controller.deleteProject);



module.exports = router;*/
