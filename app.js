var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var cfg = require('./config');
var step = require('step');
var async = require('async');

var routes = require('./routes/index');
var users = require('./routes/users');
var config = require('./config');
var signup =require('./routes/signup');
var login =require('./routes/login');
var answer = require('./routes/answer');
var comments = require('./routes/comments');
var question = require('./routes/question');
var tags = require('./routes/tags');

var app = express();

app.set('superSecret',cfg.secret)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/signup',signup);
app.use('/login',login);
app.use('/comments',comments);
app.use('/question',question);
app.use('/answer',answer);
app.use('/tags',tags);
//<<<<<<< HEAD
app.use('./users',users);
  
//=======

//>>>>>>> c785294659770afdad21e0773841e37e8431e932
app.use(function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    //var token = window.localStorage.getItem('token');
    //console.log(token);
    if (token) {
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

//app.use('/answer',answer);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
