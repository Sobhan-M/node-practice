const Sequelize = require('sequelize');
const Player = require('../models/player');
const sequelize = require('../util/database');


exports.getHome = (req, res, next) => {
	Player.findAll()
		.then(players => {
	res.render('index', {
		pageTitle: 'Home',
				path: '/',
				players: players
			});
		})
		.catch(err => {
			console.log(err);
	});
};

exports.getAddPlayer = (req, res, next) => {
	res.render('add-player', {
		pageTitle: 'Add Player',
		path: '/add-player'
	});
};

exports.postCreatePlayer = (req, res, next) => {
	let name = req.body.name;
	let age = req.body.age;

	Player.create({
		name: name,
		age: age
	})
		.then(result => {
			res.redirect('/');
		})
		.catch(err => {
			console.log(err);
		})
};

exports.postEditPlayer = (req, res, next) => {
	res.redirect('/');
};

exports.postDeletePlayer = (req, res, next) => {
	res.redirect('/');
};