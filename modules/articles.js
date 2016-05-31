var mongoose = require('mongoose');
// instance of Schema.
var Schema = mongoose.Schema;

var articleSchema = new Schema ({
	author: {
		type: String,
		required: [true, "author is required field."]
	},
	title: {
		type: String,
		required: [true, "title is required field."]
	},
	text: {
		type: String,
		required: [true, "text is required field."]
	},
	image: {
		type: String
	},
	date: {
		type: String
	},
	tags: {
		type: Array
	}
});

module.exports=articleSchema
