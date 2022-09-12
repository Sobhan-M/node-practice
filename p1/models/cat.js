const db = require('../util/database');

module.exports = class Cat {
	constructor(name, age, description, colour) {
		this.name = name;
		this.age = age;
		this.description = description;
		this.colour = colour;
	}

	static fetchAll() {
		return db.execute('SELECT * FROM cats');
	}

	static insertCat(name, age, description, colour) {
		return db.execute('INSERT INTO cats VALUES (?, ?, ?, ?)', [
			name,
			age,
			description,
			colour
		]);
	}

	updateCat(age=this.age, description=this.description, colour=this.colour) {
		return db.execute('UPDATE cats SET age = ?, description = ?, colour = ? WHERE name = ?', [
			age,
			description,
			colour,
			this.name
		]);
	}
}