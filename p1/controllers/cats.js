const Cat = require('../models/cat');


exports.getIndex = (req, res, next) => {
	Cat.fetchAll()
		.then( ([rows, fieldData]) => {

			console.log(rows[0]);
			console.log(rows[0].name);

			res.render('index', {
				pageTitle: 'Home',
				path: '/',
				cats: rows
			});
		})
		.catch(err => console.log(err));

	
};

exports.getAddCats = (req, res, next) => {
	res.render('add-cats', {
		pageTitle: 'Add Cat',
		path: '/add-cats'
	});
};

exports.postAddCat = (req, res, next) => {
	let name = req.body.name;
	let age = req.body.age;
	let colour = req.body.colour;
	let description = req.body.description;

	Cat.insertCat(name, age, description, colour)
		.then((result) => {
			console.log(result);
			res.redirect('/');
		})
		.catch(err => console.log(err));
	
};