
exports.getHome = (req, res, next) => {
	res.render('index', {
		pageTitle: 'Home',
		path: '/'
	});
};

exports.getAddPlayer = (req, res, next) => {
	res.render('add-player', {
		pageTitle: 'Add Player',
		path: '/add-player'
	});
};

exports.postCreatePlayer = (req, res, next) => {
	res.redirect('/');
};

exports.postEditPlayer = (req, res, next) => {
	res.redirect('/');
};

exports.postDeletePlayer = (req, res, next) => {
	res.redirect('/');
};