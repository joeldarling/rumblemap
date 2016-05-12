var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/', function( req, res, next ){

  //send home page
  res.send('rumbles')

});
