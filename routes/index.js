const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');
router.get('/',homeController.formed);
router.post('/link',homeController.home);

module.exports = router;