var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', par: 'new parameter' });
});

router.get('/newarticle', function(req, res, next) {
  res.render('newarticle', {});
});

module.exports = router;
