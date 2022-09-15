const express = require('express');
const router = express.Router();

const playerController = require('../controllers/player');

router.get('/', playerController.getHome);

router.get('/add-player', playerController.getAddPlayer);

router.post('/create-player', playerController.postCreatePlayer);

router.post('/edit-player', playerController.postEditPlayer);

router.post('/delete-player', playerController.postDeletePlayer);

module.exports = router;