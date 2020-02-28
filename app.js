const createError = require('http-errors');
const express = require('express');
const path = require('path');
const db = require('./models');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passportSetup = require('./config/passport-setup');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', usersRouter);
app.use('/api', apiRouter);

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

db.sequelize.sync()
  .then(function() {
    app.listen(PORT, function() {
      console.log(`🌎 ==> API server now on port ${PORT}!`)
    });
  })



module.exports = app;
