
var mongoose = require('mongoose');
var express = require('express');
var articleSchema = require('../modules/articles.js');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'public/images/uploads/' })
var saveArticle = require('../controller/saveArticle');

router.post('/add', upload.single('image'), function(req, res, next) {
	saveArticle(req, res);
});

module.exports = router;