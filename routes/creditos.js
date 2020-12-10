var express = require('express');
var router = express.Router();

/* Creditos. */
router.get('/', function(req, res, next) {
  res.render('creditos');
});

module.exports = router;
