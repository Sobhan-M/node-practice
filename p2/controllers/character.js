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
	let characterName = req.body.name;
	let characterClass = req.body.class;
	let characterLevel = req.body.level;
	let str = req.body.str;
	let dex = req.body.dex;
	let con = req.body.con;
	let int = req.body.int;
	let wis = req.body.wis;
	let cha = req.body.cha;

	// TODO: Error handling if it doesn't match point-buy method.

	Character.create({
		name: characterName,
		class: characterClass,
		level: characterLevel,
		str: str,
		dex: dex,
		con: con,
		int: int,
		wis: wis,
		cha: cha
	})
	.then(result => {
		res.redirect('/characters');
	})
	.catch(err => {
		console.log(err);
	});

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

