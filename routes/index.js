var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Ola node JS!!!! agora com node mon')
});

module.exports = router;
