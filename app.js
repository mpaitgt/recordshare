const express = require('express');
const dotenv = require('dotenv').config();
const createError = require('http-errors');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// passport config // look into using passport-session
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

// mongodb and cloudinary config
const mongo = require('./config/connection');
const {cloudinary, upload} = require('./config/cloudinary');

// route config
const dbRouter = require('./routes/db-routes');
const spotifyRouter = require('./routes/spotify-routes');
const authRouter = require('./routes/passport-routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

// import routes
app.use('/api', dbRouter);
app.use('/api', spotifyRouter);
app.use('/auth', authRouter);

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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

module.exports = app;
