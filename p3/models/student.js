const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
			courseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
			grade: Number
		}
	]
});

module.exports = mongoose.model('Student', studentSchema);