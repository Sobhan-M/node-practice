const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Course'
		}

	]
});

module.exports = mongoose.model('Professor', professorSchema);