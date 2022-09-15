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

exports.getEditPlayer = (req, res, next) => {
	let playerId = req.params.playerId;

	Player.findByPk(playerId)
		.then(player => {
			res.render('edit-player', {
				pageTitle: `Edit Player ${playerId}`,
				path: '',
				player: player
			})
		})
		.catch(err => {
			console.log(err);
		});
};

exports.postEditPlayer = (req, res, next) => {
	let playerId = req.body.id;
	let name = req.body.name;
	let age = req.body.age;

	Player.update({name: name, age: age}, {
		where: {
			id: playerId
		}
	})
		.then(result => {
			res.redirect('/');
		})
		.catch(err => {
			console.log(err);
		});

};

exports.postDeletePlayer = (req, res, next) => {
	res.redirect('/');
};