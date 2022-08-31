const express = require('express');

const catController = require('../controllers/cats');

const router = express.Router();

router.get('/add-cats', catController.getAddCats);

router.post('/add-cat', catController.postAddCat);

router.get('/', catController.getIndex);

module.exports = router;