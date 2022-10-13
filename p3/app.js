const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const generalRouter = require('./routes/general');

const app = express();

app.use(express.static('/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(generalRouter);

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0')
	.then(result => {
		app.listen(3000);
	})
	.catch(err => {
		console.log(err);
	})

