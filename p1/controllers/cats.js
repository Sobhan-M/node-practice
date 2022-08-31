
exports.getIndex = (req, res, next) => {
	res.render('index', {
		pageTitle: 'Home',
		path: '/'
	});
};

exports.getAddCats = (req, res, next) => {
	res.render('add-cat', {
		pageTitle: 'Add Cat',
		path: '/add-cat'
	});
};

exports.postAddCat = (req, res, next) => {
	// TODO: Do stuff with the incoming data.
	res.redirect('/');
};