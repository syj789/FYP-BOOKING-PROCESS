var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
//------------------ROUTERS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users');
var coursesRouter = require("./routes/api/courses");
var notificationsRouter = require("./routes/api/notifications");
var contactsRouter = require("./routes/api/contacts");
var assignmentsRouter = require("./routes/api/assignments");
var quizesRouter = require("./routes/api/quizes");
var studentsRouter = require("./routes/api/students");

var config = require("config");
var cors = require('cors');
var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/students', studentsRouter);
app.use('/api/quizes', quizesRouter);
app.use('/api/assignments', assignmentsRouter);

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


mongoose
.connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB CRSI...."))
  .catch((error) => console.log(error.message));


module.exports = app;
