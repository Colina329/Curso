var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nosotrosRouter = require('./routes/nosotros');//routes/nosotros.js
var serviciosRouter =require('./routes/servicios');//routes/servicios.js
var contactenosRouter =require('./routes/contactenos');//routes/conectenos.js
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nosotros',nosotrosRouter);
app.use('/servicios',serviciosRouter);
app.use('/contactenos',contactenosRouter);

app.get('/prueba', function(req,res){
  res.send('Hola soy la pagina de prueba')
})
app.get('/prueba2', function(req,res){
  res.send('La practica constante tendra sus frutos')
})
app.get('/prueba3', function(req,res){
  res.send('Me gustaria tener mejores ideas')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
