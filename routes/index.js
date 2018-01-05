var express = require('express');
var binance = require('node-binance-api');

var router = express.Router();
var key = process.env.BKey;
var secret = process.env.BSecret;

binance.options({
	'APIKEY': key,
	'APISECRET': secret
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

router.get('/prices', function(req, res, next){

})

module.exports = router;
