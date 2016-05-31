
var mongoose = require('mongoose');
// connect to DB.
var connection = mongoose.connect('mongodb://localhost/test22');

module.exports = connection;
