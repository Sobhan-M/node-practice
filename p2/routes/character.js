const express = require('express');
const router = express.Router();

const characterController = require('../controllers/character');

router.get('/add-character', characterController.getAddCharacter);

router.post('/create-character', characterController.postCreateCharacter);

router.get('/edit-character/:characterId', characterController.getEditCharacter);

router.post('/edit-character', characterController.postEditCharacter);

router.post('/delete-character', characterController.postDeleteCharacter);

module.exports = router;