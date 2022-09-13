// Needed packages.
const bodyParser = require('body-parser');
const express = require('express');

// Models.
const Character = require('./models/character');
const Player = require('./models/player');

// Custom files.
const sequelize = require('./util/database');

// Setting up server.
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// Database management.
Character.belongsTo(Player, {onDelete: 'CASCADE'});
Player.hasMany(Character);

// Starting server.
sequelize.sync(/*{force: true}*/)
	.then(result => {
		app.listen(8000);
	})
	.catch(err => console.log(err));