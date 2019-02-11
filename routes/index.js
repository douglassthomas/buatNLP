var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/positive', function(req, res, next) {
  res.render('positive');
});
router.get('/negative', function(req, res, next) {
  res.render('negative', { title: 'Express' });
});
module.exports = router;
