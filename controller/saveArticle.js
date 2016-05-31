var mongoose = require('mongoose');
var express = require('express');
var articleSchema = require('../modules/articles.js');


function saveArticle(req, res){
	var Article = mongoose.model('Article', articleSchema);
	var data = req.body;
	data.image = req.file.path + '.jpg';
	console.log(data);
	var article = new Article(data);
	article.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('meow');
	  }
	});
	//
	res.json(data);
}


module.exports = saveArticle;