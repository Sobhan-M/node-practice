const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Character = require('../models/character');
const Player = require('../models/player');

exports.getCharacters = (req, res, next) => {

	Character.findAll()
		.then(characters => {
			res.render('characters', {
				pageTitle: 'Characters',
				path: '/characters',
				characters: characters
			});
		})
		.catch(err => {
			console.log(err);
		});
};

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
};

exports.getEditCharacter = (req, res, next) => {
	let characterId = req.params.characterId;

	Character.findByPk(characterId)
		.then(character => {
			res.render('edit-character', {
				pageTitle: `Edit ${character.name}`,
				path: '',
				character: character
			});
		})
		.catch(err => {
			console.log(err);
		});
};

exports.postEditCharacter = (req, res, next) => {
	let characterId = req.body.id;
	let characterName = req.body.name;
	let characterClass = req.body.class;
	let characterLevel = req.body.level;
	let str = req.body.str;
	let dex = req.body.dex;
	let con = req.body.con;
	let int = req.body.int;
	let wis = req.body.wis;
	let cha = req.body.cha;

	Character.update({
		name: characterName,
		class: characterClass,
		level: characterLevel,
		str: str,
		dex: dex,
		con: con,
		int: int,
		wis: wis,
		cha: cha
	},
		{
			where:
				{ id: characterId }
		})
		.then(player => {
			res.redirect('/characters');
		})
		.catch(err => {
			console.log(err);
		});
};

exports.postDeleteCharacter = (req, res, next) => {
	let characterId = req.body.id;

	Character.destroy({
		where: {
			id: characterId
		}
	})
		.then(result => {
			res.redirect('characters');
		})
		.catch(err => {
			console.log(err);
		})
};

