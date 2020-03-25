require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../models');

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      if (err) {return done(err)};
      if (!user) {return done(null, false)};
      if (!user.verifyPassword(password)) {return done(null, false)};
      return done(null, user);
    })
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
 });
 
passport.deserializeUser(function(user, done) {
done(null, user);
});

module.exports = passport;