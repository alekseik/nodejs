

var mongoose = require('mongoose');
// connect to DB.
var connection = mongoose.connect('mongodb://heroku_mlcnhf11:heroku_mlcnhf11@ds015403.mlab.com:15403/heroku_mlcnhf11');

module.exports = connection;
