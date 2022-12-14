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

// Setting up view engine.
app.set('view engine', 'ejs');
app.set('views', 'views');

// Database management.
Character.belongsTo(Player, {onDelete: 'CASCADE'});
Player.hasMany(Character);

// Setting up routes.
const playerRoutes = require('./routes/player');
const characterRoutes = require('./routes/character');

app.use(playerRoutes);
app.use(characterRoutes);

// Starting server.
sequelize.sync(/*{force: true}*/)
	.then(result => {
		app.listen(8000);
	})
	.catch(err => console.log(err));