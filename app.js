//Define requires
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require('cors');

var projectsRouter = require('./routes/projects');
var peopleRouter = require('./routes/people');
var checksRouter = require('./routes/checks');
var invoicesRouter = require('./routes/invoices');
var paymentsRouter = require('./routes/payments');
var companiesRouter = require('./routes/companies');
var contractsRouter = require('./routes/contracts');


// Database connection
mongoose.connect('mongodb://localhost:27017/greendevorganizer', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connection made");
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//API Routes
app.use('/projects', projectsRouter);
app.use('/people', peopleRouter);
app.use('/checks', checksRouter);
app.use('/contracts', contractsRouter);
app.use('/companies', companiesRouter);
app.use('/payments', paymentsRouter);
app.use('/invoices', invoicesRouter);

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