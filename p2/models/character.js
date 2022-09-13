const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Character = sequelize.define('character', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	class: {
		type: Sequelize.STRING,
		allowNull: false
	},
	level: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	str: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	dex: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	con: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	int: {
		type:Sequelize.INTEGER,
		allowNull: false
	},
	wis: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	cha: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});

module.exports = Character;