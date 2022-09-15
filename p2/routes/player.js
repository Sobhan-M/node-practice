const express = require('express');
const router = express.Router();

router.get('/');

router.get('/add-player');

router.post('/create-player');

router.post('/edit-player');

router.post('/delete-player');

module.exports = router;