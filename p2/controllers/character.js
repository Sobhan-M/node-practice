const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Character = require('../models/character');
const Player = require('../models/player');

exports.getAddCharacter = (req, res, next) => {
	res.render('add-character', {
		pageTitle: 'Add Character',
		path: '/add-character'
	});
};

exports.postCreateCharacter = (req, res, next) => {
	// TODO: Implement character creation.
};

exports.getEditCharacter = (req, res, next) => {
	let chracterId = req.params.characterId;

	// TODO: Implement editing.
};

exports.postEditCharacter = (req, res, next) => {
	// TODO: Implement editing.
};

exports.postDeleteCharacter = (req, res, next) => {
	// TODO: Implement deleting.
};

