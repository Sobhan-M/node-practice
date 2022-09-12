const mysql = require('mysql2');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'admin',
	database: 'test',
	password: 'password'
});

module.exports = pool.promise();