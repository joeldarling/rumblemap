var express = require('express');

var app = express();


//setup router
app.use('/', require('./routes'));
app.listen(3000, function(){

  console.log('server listening on port 3000');

});
