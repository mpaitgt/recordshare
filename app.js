const dotenv = require('dotenv').config();
const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const passport = require('passport');
require('./config/passport-oauth-setup');
const path = require('path');
const db = require('./models');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth-routes');
const apiRouter = require('./routes/api-routes');
const spotifyRouter = require('./routes/spotify-routes');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/api', spotifyRouter);

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
  res.send('error');
});

db.sequelize.sync()
  .then(function() {
    app.listen(PORT, function() {
      console.log(`🌎 ==> API server now on port ${PORT}!`)
    });
  })



module.exports = app;
