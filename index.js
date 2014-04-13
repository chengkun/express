var express = require('express'),
    hbs = require('express-hbs'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', hbs);
app.engine('hbs', hbs.express3({
  defaultLayout:__dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}))
app.set('views', __dirname + '/views');

app.set(express.favicon());
//app.set(express.logger('dev'));
app.set(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'vendor')));

if('development' == app.get('env')){
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port' + app.get('port'));
})
