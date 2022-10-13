const router = require('express').Router();
const generalController = require('../controllers/general');

router.get('/', generalController.getHome);

module.exports = router;