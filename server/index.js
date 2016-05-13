var express = require('express');

var app = express();

var morgan = require('morgan');
var path = require('path');

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, './server/app/views/index.html');
//var faviconPath = path.join(rootPath, './server/app/views/favicon.ico');


//setup static routes
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, '../node_modules/angular')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

app.use('/js', express.static(path.join(__dirname, '../browser/js')));

app.use('/', express.static(path.join(__dirname, '../public')));

//setup middleware
app.use(morgan('dev'));

//router
app.use('/', require('./routes'));

app.listen(3000, function(){

  console.log('server listening on port 3000');

});
