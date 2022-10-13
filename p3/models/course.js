const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	semester: {
		type: String,
		required: true
	},
	professor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Professor',
		required: true
	},
	students: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Student'
		}
	]
});