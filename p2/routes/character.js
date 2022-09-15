const express = require('express');
const router = express.Router();

router.get('/');

router.get('/add-character');

router.post('/create-character');

router.post('/edit-character');

router.post('/delete-character');

module.exports = router;