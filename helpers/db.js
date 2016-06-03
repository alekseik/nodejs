
var mongoose = require('mongoose');
// connect to DB.
var connection = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds023213.mlab.com:23213/heroku_87cxqr8p');

module.exports = connection;
