var express = require('express');
var router = express.Router();

let str = (st) => { return JSON.stringify(st) }

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    page: str('index')
  });
});

router.get('/trades', function(req, res, next){ 
  res.render('index', {
    title: 'Trades',
    page: str('trade')
  })
})

module.exports = router;
