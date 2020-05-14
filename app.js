const dotenv = require('dotenv').config();
const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const spotifyRouter = require('./routes/spotify-routes');
const PORT = process.env.PORT || 3001;
const connection = mongoose.connection;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/recordshare';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

connection.once('open', function() {
  console.log('Connected to MongoDB!');
})

app.use(cors());
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

module.exports = app;
